type CheckableTypeNames = keyof CheckableTypes;

interface TypedRemoteEvent0 {
	FireServer(): void;
	FireClient(player: Player): void;
	FireAllClients(): void;
	ConnectClientEvent(action: () => void): RBXScriptConnection;
	ConnectServerEvent(action: (player: Player) => void): RBXScriptConnection;
}

interface TypedRemoteEvent1<A extends CheckableTypeNames> {
	FireServer(arg0: CheckableTypes[A]): void;
	FireClient(player: Player, arg0: CheckableTypes[A]): void;
	FireAllClients(arg0: CheckableTypes[A]): void;
	ConnectClientEvent(action: (arg0: CheckableTypes[A]) => void): RBXScriptConnection;
	ConnectServerEvent(action: (player: Player, arg0: CheckableTypes[A]) => void): RBXScriptConnection;
}

interface TypedRemoteEvent2<A extends CheckableTypeNames, B extends CheckableTypeNames> {
	FireServer(arg0: CheckableTypes[A], arg1: CheckableTypes[B]): void;
	FireClient(player: Player, arg0: CheckableTypes[A], arg1: CheckableTypes[B]): void;
	FireAllClients(arg0: CheckableTypes[A], arg1: CheckableTypes[B]): void;
	ConnectClientEvent(action: (arg0: CheckableTypes[A], arg1: CheckableTypes[B]) => void): RBXScriptConnection;
	ConnectServerEvent(
		action: (player: Player, arg0: CheckableTypes[A], arg1: CheckableTypes[B]) => void,
	): RBXScriptConnection;
}

interface TypedRemoteEvent3<A extends CheckableTypeNames, B extends CheckableTypeNames, C extends CheckableTypeNames> {
	FireServer(arg0: CheckableTypes[A], arg1: CheckableTypes[B], arg2: CheckableTypes[C]): void;
	FireClient(player: Player, arg0: CheckableTypes[A], arg1: CheckableTypes[B], arg2: CheckableTypes[C]): void;
	FireAllClients(arg0: CheckableTypes[A], arg1: CheckableTypes[B], arg2: CheckableTypes[C]): void;
	ConnectClientEvent(
		action: (arg0: CheckableTypes[A], arg1: CheckableTypes[B], arg2: CheckableTypes[C]) => void,
	): RBXScriptConnection;
	ConnectServerEvent(
		action: (player: Player, arg0: CheckableTypes[A], arg1: CheckableTypes[B], arg2: CheckableTypes[C]) => void,
	): RBXScriptConnection;
}

interface TypedRemoteEvent4<
	A extends CheckableTypeNames,
	B extends CheckableTypeNames,
	C extends CheckableTypeNames,
	D extends CheckableTypeNames,
> {
	FireServer(
		arg0: CheckableTypes[A],
		arg1: CheckableTypes[B],
		arg2: CheckableTypes[C],
		arg3: CheckableTypes[D],
	): void;
	FireClient(
		player: Player,
		arg0: CheckableTypes[A],
		arg1: CheckableTypes[B],
		arg2: CheckableTypes[C],
		arg3: CheckableTypes[D],
	): void;
	FireAllClients(
		arg0: CheckableTypes[A],
		arg1: CheckableTypes[B],
		arg2: CheckableTypes[C],
		arg3: CheckableTypes[D],
	): void;
	ConnectClientEvent(
		action: (
			arg0: CheckableTypes[A],
			arg1: CheckableTypes[B],
			arg2: CheckableTypes[C],
			arg3: CheckableTypes[D],
		) => void,
	): RBXScriptConnection;
	ConnectServerEvent(
		action: (
			player: Player,
			arg0: CheckableTypes[A],
			arg1: CheckableTypes[B],
			arg2: CheckableTypes[C],
			arg3: CheckableTypes[D],
		) => void,
	): RBXScriptConnection;
}

interface TypedRemoteEventConstructor {
	new <A extends CheckableTypeNames>(name: string): TypedRemoteEvent0;
	new <A extends CheckableTypeNames>(name: string, arg0: A): TypedRemoteEvent1<A>;
	new <A extends CheckableTypeNames, B extends CheckableTypeNames>(name: string, arg0: A, arg1: B): TypedRemoteEvent2<
		A,
		B
	>;
	new <A extends CheckableTypeNames, B extends CheckableTypeNames, C extends CheckableTypeNames>(
		name: string,
		arg0: A,
		arg1: B,
		arg2: C,
	): TypedRemoteEvent3<A, B, C>;
	new <
		A extends CheckableTypeNames,
		B extends CheckableTypeNames,
		C extends CheckableTypeNames,
		D extends CheckableTypeNames,
	>(
		name: string,
		arg0: A,
		arg1: B,
		arg2: C,
		arg3: D,
	): TypedRemoteEvent4<A, B, C, D>;
}

interface TypedRemoteFunction0<T extends defined[]> {
	InvokeServer(): LuaTuple<T>;
	SetServerInvoke(action: (player: Player) => LuaTuple<T>): void;
}

interface TypedRemoteFunction1<T extends defined[], A extends CheckableTypeNames> {
	InvokeServer(arg0: CheckableTypes[A]): LuaTuple<T>;
	SetServerInvoke(action: (player: Player, arg0: CheckableTypes[A]) => LuaTuple<T>): void;
}

interface TypedRemoteFunction2<T extends defined[], A extends CheckableTypeNames, B extends CheckableTypeNames> {
	InvokeServer(arg0: CheckableTypes[A], arg1: CheckableTypes[B]): LuaTuple<T>;
	SetServerInvoke(action: (player: Player, arg0: CheckableTypes[A], arg1: CheckableTypes[B]) => LuaTuple<T>): void;
}

interface TypedRemoteFunction3<
	T extends defined[],
	A extends CheckableTypeNames,
	B extends CheckableTypeNames,
	C extends CheckableTypeNames,
> {
	InvokeServer(arg0: CheckableTypes[A], arg1: CheckableTypes[B], arg2: CheckableTypes[C]): LuaTuple<T>;
	SetServerInvoke(
		action: (
			player: Player,
			arg0: CheckableTypes[A],
			arg1: CheckableTypes[B],
			arg2: CheckableTypes[C],
		) => LuaTuple<T>,
	): void;
}

interface TypedRemoteFunction4<
	T extends defined[],
	A extends CheckableTypeNames,
	B extends CheckableTypeNames,
	C extends CheckableTypeNames,
	D extends CheckableTypeNames,
> {
	InvokeServer(
		arg0: CheckableTypes[A],
		arg1: CheckableTypes[B],
		arg2: CheckableTypes[C],
		arg3: CheckableTypes[D],
	): LuaTuple<T>;
	SetServerInvoke(
		action: (
			player: Player,
			arg0: CheckableTypes[A],
			arg1: CheckableTypes[B],
			arg2: CheckableTypes[C],
			arg3: CheckableTypes[D],
		) => LuaTuple<T>,
	): void;
}

interface TypedRemoteFunctionConstructor {
	new <T extends defined[], A extends CheckableTypeNames>(name: string): TypedRemoteFunction0<T>;
	new <T extends defined[], A extends CheckableTypeNames>(name: string, arg0: A): TypedRemoteFunction1<T, A>;
	new <T extends defined[], A extends CheckableTypeNames, B extends CheckableTypeNames>(
		name: string,
		arg0: A,
		arg1: B,
	): TypedRemoteFunction2<T, A, B>;
	new <T extends defined[], A extends CheckableTypeNames, B extends CheckableTypeNames, C extends CheckableTypeNames>(
		name: string,
		arg0: A,
		arg1: B,
		arg2: C,
	): TypedRemoteFunction3<T, A, B, C>;
	new <
		T extends defined[],
		A extends CheckableTypeNames,
		B extends CheckableTypeNames,
		C extends CheckableTypeNames,
		D extends CheckableTypeNames,
	>(
		name: string,
		arg0: A,
		arg1: B,
		arg2: C,
		arg3: D,
	): TypedRemoteFunction4<T, A, B, C, D>;
}

export declare const TypedRemoteEvent: TypedRemoteEventConstructor;
export declare const TypedRemoteFunction: TypedRemoteFunctionConstructor;
