import { RunService } from "@rbxts/services";

export type Pollable = {
	ConnectServerEvent(action: () => void): RBXScriptConnection;
	ConnectClientEvent(action: () => void): RBXScriptConnection;
};

export default class TypedRemotePoller<T extends Pollable> {
	private events: defined[][] = [];
	private Connection: RBXScriptConnection;

	constructor(typedRemoteEvent: T) {
		if (RunService.IsServer()) {
			this.Connection = typedRemoteEvent.ConnectServerEvent((...args) => this.events.push(args));
		} else {
			this.Connection = typedRemoteEvent.ConnectClientEvent((...args) => this.events.push(args));
		}
	}

	pollServer(action: Parameters<T["ConnectServerEvent"]>[0]) {
		this.events.forEach((args) => {
			(action as Callback)(...args);
		});
		this.events.clear();
	}

	pollClient(action: Parameters<T["ConnectClientEvent"]>[0]) {
		this.events.forEach((args) => {
			(action as Callback)(...args);
		});
		this.events.clear();
	}

	Destroy() {
		this.Connection.Disconnect();
	}
}
