export class TypedAttributes<T extends {}> {
	Instance: Instance;
	constructor(instance: Instance, defaults?: T) {
		this.Instance = instance;

		if (defaults)
			for (const [i, v] of pairs(defaults)) {
				this.Instance.SetAttribute(tostring(i), v as AttributeValue);
			}
	}

	Get<A extends keyof T>(attribute: A): T[A] & AttributeValue {
		return this.Instance.GetAttribute(tostring(attribute))! as T[A] & AttributeValue;
	}

	Set<A extends keyof T>(attribute: A, value: T[A] & AttributeValue) {
		this.Instance.SetAttribute(attribute as string, value);
	}
}
