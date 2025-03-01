# Contract Classes

Taking inspiration from object-oriented programming, StarkNet distinguishes between a contract and its implementation by separating contracts into classes and instances.

A contract class is the definition of the contract: Cairo byte code, hint information, entry point names, and everything that defines its semantics unambiguously. Each class is identified by its class hash, which is analogous to a class name in an object oriented programming language. A contract instance is a deployed contract corresponding to some class. Notice that only contract instances behave as contracts in that they have their own storage and can be called by transactions or other contracts.

A contract class does not necessarily have a deployed instance in StarkNet.

## Using Classes

New classes can be added to the state of StarkNet with the [`declare`](../Blocks/transactions#declare-transaction) transaction. New instances of a previously declared class can be deployed via the `deploy` system call.

To use the functionality of a declared class, without deploying an instance of that class, you can use the `library_call` system call. This system call is an analogue of Ethereum's delegate call in the world of classes. You can use class code directly, instead of having a placeholder contract deployed, which is used only for its code.
