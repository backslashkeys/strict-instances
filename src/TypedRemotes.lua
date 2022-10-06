local TypedRemoteEvent
local TypedRemoteFunction
local IsServer = game:GetService("RunService"):IsServer();
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Remotes = if IsServer then Instance.new("Folder", ReplicatedStorage) else ReplicatedStorage:WaitForChild("Remotes")
if IsServer then
	Remotes.Name = "Remotes"
end

function GetRemoteEvent(name)
	if IsServer then
		local remote = Instance.new("RemoteEvent", Remotes)
		remote.Name = name
		return remote
	end
	return Remotes:WaitForChild(name)
end

function GetRemoteFunction(name)
	if IsServer then
		local remote = Instance.new("RemoteFunction", Remotes)
		remote.Name = name
		return remote
	end
	return Remotes:WaitForChild(name)
end

do
	TypedRemoteFunction = setmetatable({}, {
		__tostring = function()
			return "TypedRemoteFunction"
		end,
	})
	TypedRemoteFunction.__index = TypedRemoteFunction
	function TypedRemoteFunction.new(...)
		local self = setmetatable({}, TypedRemoteFunction)
		return self:constructor(...) or self
	end
	function TypedRemoteFunction:constructor(name, ...)
		self.Args = {...}
		self.RemoteFunction = GetRemoteFunction(name)
	end
	function TypedRemoteFunction:InvokeServer(...)
		return self.RemoteFunction:InvokeServer(...)
	end
	function TypedRemoteFunction:SetServerInvoke(action)
		self.RemoteFunction.OnServerInvoke = function(player, ...)
			local args = { ... }
			do
				local i = 0
				local _shouldIncrement = false
				while true do
					if _shouldIncrement then
						i += 1
					else
						_shouldIncrement = true
					end
					if not (i < #self.Args) then
						break
					end
					local _arg0 = args[i + 1]
					local _arg1 = self.Args[i + 1]
					if not (typeof(_arg0) == _arg1) then
						return nil
					end
				end
			end
			return action(player, ...)
		end
	end
end

do
	TypedRemoteEvent = setmetatable({}, {
		__tostring = function()
			return "TypedRemoteEvent"
		end,
	})
	TypedRemoteEvent.__index = TypedRemoteEvent
	function TypedRemoteEvent.new(...)
		local self = setmetatable({}, TypedRemoteEvent)
		return self:constructor(...) or self
	end
	function TypedRemoteEvent:constructor(name, ...)
		self.Args = {...}
		self.RemoteEvent = GetRemoteEvent(name)
	end
	function TypedRemoteEvent:FireServer(...)
		self.RemoteEvent:FireServer(...)
	end
	function TypedRemoteEvent:FireClient(player, ...)
		self.RemoteEvent:FireClient(player, ...)
	end
	function TypedRemoteEvent:FireAllClients(...)
		self.RemoteEvent:FireAllClients(...)
	end
	function TypedRemoteEvent:ConnectClientEvent(action)
		return self.RemoteEvent.OnClientEvent:Connect(action)
	end
	function TypedRemoteEvent:ConnectServerEvent(action)
		return self.RemoteEvent.OnServerEvent:Connect(function(player, ...)
			local args = { ... }
			do
				local i = 0
				local _shouldIncrement = false
				while true do
					if _shouldIncrement then
						i += 1
					else
						_shouldIncrement = true
					end
					if not (i < #self.Args) then
						break
					end
					local _arg0 = args[i + 1]
					local _arg1 = self.Args[i + 1]
					if not (typeof(_arg0) == _arg1) then
						return nil
					end
				end
			end
			action(player, ...)
		end)
	end
end
return {
	TypedRemoteEvent = TypedRemoteEvent,
	TypedRemoteFunction = TypedRemoteFunction,
}
