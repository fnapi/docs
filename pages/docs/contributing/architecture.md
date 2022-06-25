# How does it work

The compiler analyzes input file, looking for `export default class`.
Once it finds it, it checks methods with the `@FnApi` annotation.

To analyze the inputs and outputs of the method, it uses [`type_server` module](https://github.com/fnapi/fnapi/tree/cf462d14c82011ae80b02aca8a9f474b662e17d4/crates/fnapi-compiler/src/type_server).
`type_server` module analyzes the types using `tsc` and `ts-morph`.

After analyzing the methods, the compiler can create a json file describing api definitions, and client for it.
As you can see in an [example API definition](https://github.com/fnapi/fnapi/blob/cf462d14c82011ae80b02aca8a9f474b662e17d4/crates/fnapi-compiler/tests/fixture/return-types/object/1/apiDef.json), it contains all required information for generating clients for apis.
This api definitions can be published, without exposing server source code.

The compiler test suite and node binding then generates required client.
