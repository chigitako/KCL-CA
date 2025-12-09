
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LoginInfo
 * 
 */
export type LoginInfo = $Result.DefaultSelection<Prisma.$LoginInfoPayload>
/**
 * Model Egg
 * 
 */
export type Egg = $Result.DefaultSelection<Prisma.$EggPayload>
/**
 * Model DeadChicken
 * 
 */
export type DeadChicken = $Result.DefaultSelection<Prisma.$DeadChickenPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model StockThreshold
 * 
 */
export type StockThreshold = $Result.DefaultSelection<Prisma.$StockThresholdPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LoginInfos
 * const loginInfos = await prisma.loginInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more LoginInfos
   * const loginInfos = await prisma.loginInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.loginInfo`: Exposes CRUD operations for the **LoginInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginInfos
    * const loginInfos = await prisma.loginInfo.findMany()
    * ```
    */
  get loginInfo(): Prisma.LoginInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.egg`: Exposes CRUD operations for the **Egg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eggs
    * const eggs = await prisma.egg.findMany()
    * ```
    */
  get egg(): Prisma.EggDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deadChicken`: Exposes CRUD operations for the **DeadChicken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeadChickens
    * const deadChickens = await prisma.deadChicken.findMany()
    * ```
    */
  get deadChicken(): Prisma.DeadChickenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockThreshold`: Exposes CRUD operations for the **StockThreshold** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockThresholds
    * const stockThresholds = await prisma.stockThreshold.findMany()
    * ```
    */
  get stockThreshold(): Prisma.StockThresholdDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    LoginInfo: 'LoginInfo',
    Egg: 'Egg',
    DeadChicken: 'DeadChicken',
    Customer: 'Customer',
    Shipment: 'Shipment',
    Supplier: 'Supplier',
    Stock: 'Stock',
    StockThreshold: 'StockThreshold'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "loginInfo" | "egg" | "deadChicken" | "customer" | "shipment" | "supplier" | "stock" | "stockThreshold"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LoginInfo: {
        payload: Prisma.$LoginInfoPayload<ExtArgs>
        fields: Prisma.LoginInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>
          }
          findFirst: {
            args: Prisma.LoginInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>
          }
          findMany: {
            args: Prisma.LoginInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>[]
          }
          create: {
            args: Prisma.LoginInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>
          }
          createMany: {
            args: Prisma.LoginInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>[]
          }
          delete: {
            args: Prisma.LoginInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>
          }
          update: {
            args: Prisma.LoginInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>
          }
          deleteMany: {
            args: Prisma.LoginInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>[]
          }
          upsert: {
            args: Prisma.LoginInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginInfoPayload>
          }
          aggregate: {
            args: Prisma.LoginInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginInfo>
          }
          groupBy: {
            args: Prisma.LoginInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginInfoCountArgs<ExtArgs>
            result: $Utils.Optional<LoginInfoCountAggregateOutputType> | number
          }
        }
      }
      Egg: {
        payload: Prisma.$EggPayload<ExtArgs>
        fields: Prisma.EggFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EggFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EggFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>
          }
          findFirst: {
            args: Prisma.EggFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EggFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>
          }
          findMany: {
            args: Prisma.EggFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>[]
          }
          create: {
            args: Prisma.EggCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>
          }
          createMany: {
            args: Prisma.EggCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EggCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>[]
          }
          delete: {
            args: Prisma.EggDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>
          }
          update: {
            args: Prisma.EggUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>
          }
          deleteMany: {
            args: Prisma.EggDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EggUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EggUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>[]
          }
          upsert: {
            args: Prisma.EggUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggPayload>
          }
          aggregate: {
            args: Prisma.EggAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEgg>
          }
          groupBy: {
            args: Prisma.EggGroupByArgs<ExtArgs>
            result: $Utils.Optional<EggGroupByOutputType>[]
          }
          count: {
            args: Prisma.EggCountArgs<ExtArgs>
            result: $Utils.Optional<EggCountAggregateOutputType> | number
          }
        }
      }
      DeadChicken: {
        payload: Prisma.$DeadChickenPayload<ExtArgs>
        fields: Prisma.DeadChickenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeadChickenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeadChickenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>
          }
          findFirst: {
            args: Prisma.DeadChickenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeadChickenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>
          }
          findMany: {
            args: Prisma.DeadChickenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>[]
          }
          create: {
            args: Prisma.DeadChickenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>
          }
          createMany: {
            args: Prisma.DeadChickenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeadChickenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>[]
          }
          delete: {
            args: Prisma.DeadChickenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>
          }
          update: {
            args: Prisma.DeadChickenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>
          }
          deleteMany: {
            args: Prisma.DeadChickenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeadChickenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeadChickenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>[]
          }
          upsert: {
            args: Prisma.DeadChickenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeadChickenPayload>
          }
          aggregate: {
            args: Prisma.DeadChickenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeadChicken>
          }
          groupBy: {
            args: Prisma.DeadChickenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeadChickenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeadChickenCountArgs<ExtArgs>
            result: $Utils.Optional<DeadChickenCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      StockThreshold: {
        payload: Prisma.$StockThresholdPayload<ExtArgs>
        fields: Prisma.StockThresholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockThresholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockThresholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>
          }
          findFirst: {
            args: Prisma.StockThresholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockThresholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>
          }
          findMany: {
            args: Prisma.StockThresholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>[]
          }
          create: {
            args: Prisma.StockThresholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>
          }
          createMany: {
            args: Prisma.StockThresholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockThresholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>[]
          }
          delete: {
            args: Prisma.StockThresholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>
          }
          update: {
            args: Prisma.StockThresholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>
          }
          deleteMany: {
            args: Prisma.StockThresholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockThresholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockThresholdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>[]
          }
          upsert: {
            args: Prisma.StockThresholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockThresholdPayload>
          }
          aggregate: {
            args: Prisma.StockThresholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockThreshold>
          }
          groupBy: {
            args: Prisma.StockThresholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockThresholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockThresholdCountArgs<ExtArgs>
            result: $Utils.Optional<StockThresholdCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    loginInfo?: LoginInfoOmit
    egg?: EggOmit
    deadChicken?: DeadChickenOmit
    customer?: CustomerOmit
    shipment?: ShipmentOmit
    supplier?: SupplierOmit
    stock?: StockOmit
    stockThreshold?: StockThresholdOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    shipments: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | CustomerCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    Stock: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stock?: boolean | SupplierCountOutputTypeCountStockArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LoginInfo
   */

  export type AggregateLoginInfo = {
    _count: LoginInfoCountAggregateOutputType | null
    _avg: LoginInfoAvgAggregateOutputType | null
    _sum: LoginInfoSumAggregateOutputType | null
    _min: LoginInfoMinAggregateOutputType | null
    _max: LoginInfoMaxAggregateOutputType | null
  }

  export type LoginInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type LoginInfoSumAggregateOutputType = {
    id: number | null
  }

  export type LoginInfoMinAggregateOutputType = {
    id: number | null
    login_type: string | null
    password: string | null
  }

  export type LoginInfoMaxAggregateOutputType = {
    id: number | null
    login_type: string | null
    password: string | null
  }

  export type LoginInfoCountAggregateOutputType = {
    id: number
    login_type: number
    password: number
    _all: number
  }


  export type LoginInfoAvgAggregateInputType = {
    id?: true
  }

  export type LoginInfoSumAggregateInputType = {
    id?: true
  }

  export type LoginInfoMinAggregateInputType = {
    id?: true
    login_type?: true
    password?: true
  }

  export type LoginInfoMaxAggregateInputType = {
    id?: true
    login_type?: true
    password?: true
  }

  export type LoginInfoCountAggregateInputType = {
    id?: true
    login_type?: true
    password?: true
    _all?: true
  }

  export type LoginInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginInfo to aggregate.
     */
    where?: LoginInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginInfos to fetch.
     */
    orderBy?: LoginInfoOrderByWithRelationInput | LoginInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginInfos
    **/
    _count?: true | LoginInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginInfoMaxAggregateInputType
  }

  export type GetLoginInfoAggregateType<T extends LoginInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginInfo[P]>
      : GetScalarType<T[P], AggregateLoginInfo[P]>
  }




  export type LoginInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginInfoWhereInput
    orderBy?: LoginInfoOrderByWithAggregationInput | LoginInfoOrderByWithAggregationInput[]
    by: LoginInfoScalarFieldEnum[] | LoginInfoScalarFieldEnum
    having?: LoginInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginInfoCountAggregateInputType | true
    _avg?: LoginInfoAvgAggregateInputType
    _sum?: LoginInfoSumAggregateInputType
    _min?: LoginInfoMinAggregateInputType
    _max?: LoginInfoMaxAggregateInputType
  }

  export type LoginInfoGroupByOutputType = {
    id: number
    login_type: string
    password: string
    _count: LoginInfoCountAggregateOutputType | null
    _avg: LoginInfoAvgAggregateOutputType | null
    _sum: LoginInfoSumAggregateOutputType | null
    _min: LoginInfoMinAggregateOutputType | null
    _max: LoginInfoMaxAggregateOutputType | null
  }

  type GetLoginInfoGroupByPayload<T extends LoginInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginInfoGroupByOutputType[P]>
            : GetScalarType<T[P], LoginInfoGroupByOutputType[P]>
        }
      >
    >


  export type LoginInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login_type?: boolean
    password?: boolean
  }, ExtArgs["result"]["loginInfo"]>

  export type LoginInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login_type?: boolean
    password?: boolean
  }, ExtArgs["result"]["loginInfo"]>

  export type LoginInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login_type?: boolean
    password?: boolean
  }, ExtArgs["result"]["loginInfo"]>

  export type LoginInfoSelectScalar = {
    id?: boolean
    login_type?: boolean
    password?: boolean
  }

  export type LoginInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "login_type" | "password", ExtArgs["result"]["loginInfo"]>

  export type $LoginInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      login_type: string
      password: string
    }, ExtArgs["result"]["loginInfo"]>
    composites: {}
  }

  type LoginInfoGetPayload<S extends boolean | null | undefined | LoginInfoDefaultArgs> = $Result.GetResult<Prisma.$LoginInfoPayload, S>

  type LoginInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginInfoCountAggregateInputType | true
    }

  export interface LoginInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginInfo'], meta: { name: 'LoginInfo' } }
    /**
     * Find zero or one LoginInfo that matches the filter.
     * @param {LoginInfoFindUniqueArgs} args - Arguments to find a LoginInfo
     * @example
     * // Get one LoginInfo
     * const loginInfo = await prisma.loginInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginInfoFindUniqueArgs>(args: SelectSubset<T, LoginInfoFindUniqueArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginInfoFindUniqueOrThrowArgs} args - Arguments to find a LoginInfo
     * @example
     * // Get one LoginInfo
     * const loginInfo = await prisma.loginInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoFindFirstArgs} args - Arguments to find a LoginInfo
     * @example
     * // Get one LoginInfo
     * const loginInfo = await prisma.loginInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginInfoFindFirstArgs>(args?: SelectSubset<T, LoginInfoFindFirstArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoFindFirstOrThrowArgs} args - Arguments to find a LoginInfo
     * @example
     * // Get one LoginInfo
     * const loginInfo = await prisma.loginInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginInfos
     * const loginInfos = await prisma.loginInfo.findMany()
     * 
     * // Get first 10 LoginInfos
     * const loginInfos = await prisma.loginInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginInfoWithIdOnly = await prisma.loginInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginInfoFindManyArgs>(args?: SelectSubset<T, LoginInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginInfo.
     * @param {LoginInfoCreateArgs} args - Arguments to create a LoginInfo.
     * @example
     * // Create one LoginInfo
     * const LoginInfo = await prisma.loginInfo.create({
     *   data: {
     *     // ... data to create a LoginInfo
     *   }
     * })
     * 
     */
    create<T extends LoginInfoCreateArgs>(args: SelectSubset<T, LoginInfoCreateArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginInfos.
     * @param {LoginInfoCreateManyArgs} args - Arguments to create many LoginInfos.
     * @example
     * // Create many LoginInfos
     * const loginInfo = await prisma.loginInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginInfoCreateManyArgs>(args?: SelectSubset<T, LoginInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginInfos and returns the data saved in the database.
     * @param {LoginInfoCreateManyAndReturnArgs} args - Arguments to create many LoginInfos.
     * @example
     * // Create many LoginInfos
     * const loginInfo = await prisma.loginInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginInfos and only return the `id`
     * const loginInfoWithIdOnly = await prisma.loginInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoginInfo.
     * @param {LoginInfoDeleteArgs} args - Arguments to delete one LoginInfo.
     * @example
     * // Delete one LoginInfo
     * const LoginInfo = await prisma.loginInfo.delete({
     *   where: {
     *     // ... filter to delete one LoginInfo
     *   }
     * })
     * 
     */
    delete<T extends LoginInfoDeleteArgs>(args: SelectSubset<T, LoginInfoDeleteArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginInfo.
     * @param {LoginInfoUpdateArgs} args - Arguments to update one LoginInfo.
     * @example
     * // Update one LoginInfo
     * const loginInfo = await prisma.loginInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginInfoUpdateArgs>(args: SelectSubset<T, LoginInfoUpdateArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginInfos.
     * @param {LoginInfoDeleteManyArgs} args - Arguments to filter LoginInfos to delete.
     * @example
     * // Delete a few LoginInfos
     * const { count } = await prisma.loginInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginInfoDeleteManyArgs>(args?: SelectSubset<T, LoginInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginInfos
     * const loginInfo = await prisma.loginInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginInfoUpdateManyArgs>(args: SelectSubset<T, LoginInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginInfos and returns the data updated in the database.
     * @param {LoginInfoUpdateManyAndReturnArgs} args - Arguments to update many LoginInfos.
     * @example
     * // Update many LoginInfos
     * const loginInfo = await prisma.loginInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoginInfos and only return the `id`
     * const loginInfoWithIdOnly = await prisma.loginInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoginInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoginInfo.
     * @param {LoginInfoUpsertArgs} args - Arguments to update or create a LoginInfo.
     * @example
     * // Update or create a LoginInfo
     * const loginInfo = await prisma.loginInfo.upsert({
     *   create: {
     *     // ... data to create a LoginInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginInfo we want to update
     *   }
     * })
     */
    upsert<T extends LoginInfoUpsertArgs>(args: SelectSubset<T, LoginInfoUpsertArgs<ExtArgs>>): Prisma__LoginInfoClient<$Result.GetResult<Prisma.$LoginInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoCountArgs} args - Arguments to filter LoginInfos to count.
     * @example
     * // Count the number of LoginInfos
     * const count = await prisma.loginInfo.count({
     *   where: {
     *     // ... the filter for the LoginInfos we want to count
     *   }
     * })
    **/
    count<T extends LoginInfoCountArgs>(
      args?: Subset<T, LoginInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginInfoAggregateArgs>(args: Subset<T, LoginInfoAggregateArgs>): Prisma.PrismaPromise<GetLoginInfoAggregateType<T>>

    /**
     * Group by LoginInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginInfoGroupByArgs['orderBy'] }
        : { orderBy?: LoginInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginInfo model
   */
  readonly fields: LoginInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoginInfo model
   */
  interface LoginInfoFieldRefs {
    readonly id: FieldRef<"LoginInfo", 'Int'>
    readonly login_type: FieldRef<"LoginInfo", 'String'>
    readonly password: FieldRef<"LoginInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LoginInfo findUnique
   */
  export type LoginInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * Filter, which LoginInfo to fetch.
     */
    where: LoginInfoWhereUniqueInput
  }

  /**
   * LoginInfo findUniqueOrThrow
   */
  export type LoginInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * Filter, which LoginInfo to fetch.
     */
    where: LoginInfoWhereUniqueInput
  }

  /**
   * LoginInfo findFirst
   */
  export type LoginInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * Filter, which LoginInfo to fetch.
     */
    where?: LoginInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginInfos to fetch.
     */
    orderBy?: LoginInfoOrderByWithRelationInput | LoginInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginInfos.
     */
    cursor?: LoginInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginInfos.
     */
    distinct?: LoginInfoScalarFieldEnum | LoginInfoScalarFieldEnum[]
  }

  /**
   * LoginInfo findFirstOrThrow
   */
  export type LoginInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * Filter, which LoginInfo to fetch.
     */
    where?: LoginInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginInfos to fetch.
     */
    orderBy?: LoginInfoOrderByWithRelationInput | LoginInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginInfos.
     */
    cursor?: LoginInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginInfos.
     */
    distinct?: LoginInfoScalarFieldEnum | LoginInfoScalarFieldEnum[]
  }

  /**
   * LoginInfo findMany
   */
  export type LoginInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * Filter, which LoginInfos to fetch.
     */
    where?: LoginInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginInfos to fetch.
     */
    orderBy?: LoginInfoOrderByWithRelationInput | LoginInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginInfos.
     */
    cursor?: LoginInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginInfos.
     */
    skip?: number
    distinct?: LoginInfoScalarFieldEnum | LoginInfoScalarFieldEnum[]
  }

  /**
   * LoginInfo create
   */
  export type LoginInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a LoginInfo.
     */
    data: XOR<LoginInfoCreateInput, LoginInfoUncheckedCreateInput>
  }

  /**
   * LoginInfo createMany
   */
  export type LoginInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginInfos.
     */
    data: LoginInfoCreateManyInput | LoginInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginInfo createManyAndReturn
   */
  export type LoginInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * The data used to create many LoginInfos.
     */
    data: LoginInfoCreateManyInput | LoginInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginInfo update
   */
  export type LoginInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a LoginInfo.
     */
    data: XOR<LoginInfoUpdateInput, LoginInfoUncheckedUpdateInput>
    /**
     * Choose, which LoginInfo to update.
     */
    where: LoginInfoWhereUniqueInput
  }

  /**
   * LoginInfo updateMany
   */
  export type LoginInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginInfos.
     */
    data: XOR<LoginInfoUpdateManyMutationInput, LoginInfoUncheckedUpdateManyInput>
    /**
     * Filter which LoginInfos to update
     */
    where?: LoginInfoWhereInput
    /**
     * Limit how many LoginInfos to update.
     */
    limit?: number
  }

  /**
   * LoginInfo updateManyAndReturn
   */
  export type LoginInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * The data used to update LoginInfos.
     */
    data: XOR<LoginInfoUpdateManyMutationInput, LoginInfoUncheckedUpdateManyInput>
    /**
     * Filter which LoginInfos to update
     */
    where?: LoginInfoWhereInput
    /**
     * Limit how many LoginInfos to update.
     */
    limit?: number
  }

  /**
   * LoginInfo upsert
   */
  export type LoginInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the LoginInfo to update in case it exists.
     */
    where: LoginInfoWhereUniqueInput
    /**
     * In case the LoginInfo found by the `where` argument doesn't exist, create a new LoginInfo with this data.
     */
    create: XOR<LoginInfoCreateInput, LoginInfoUncheckedCreateInput>
    /**
     * In case the LoginInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginInfoUpdateInput, LoginInfoUncheckedUpdateInput>
  }

  /**
   * LoginInfo delete
   */
  export type LoginInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
    /**
     * Filter which LoginInfo to delete.
     */
    where: LoginInfoWhereUniqueInput
  }

  /**
   * LoginInfo deleteMany
   */
  export type LoginInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginInfos to delete
     */
    where?: LoginInfoWhereInput
    /**
     * Limit how many LoginInfos to delete.
     */
    limit?: number
  }

  /**
   * LoginInfo without action
   */
  export type LoginInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginInfo
     */
    select?: LoginInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginInfo
     */
    omit?: LoginInfoOmit<ExtArgs> | null
  }


  /**
   * Model Egg
   */

  export type AggregateEgg = {
    _count: EggCountAggregateOutputType | null
    _avg: EggAvgAggregateOutputType | null
    _sum: EggSumAggregateOutputType | null
    _min: EggMinAggregateOutputType | null
    _max: EggMaxAggregateOutputType | null
  }

  export type EggAvgAggregateOutputType = {
    id: number | null
    coop_number: number | null
    count: number | null
  }

  export type EggSumAggregateOutputType = {
    id: number | null
    coop_number: number | null
    count: number | null
  }

  export type EggMinAggregateOutputType = {
    id: number | null
    coop_number: number | null
    date: Date | null
    count: number | null
  }

  export type EggMaxAggregateOutputType = {
    id: number | null
    coop_number: number | null
    date: Date | null
    count: number | null
  }

  export type EggCountAggregateOutputType = {
    id: number
    coop_number: number
    date: number
    count: number
    _all: number
  }


  export type EggAvgAggregateInputType = {
    id?: true
    coop_number?: true
    count?: true
  }

  export type EggSumAggregateInputType = {
    id?: true
    coop_number?: true
    count?: true
  }

  export type EggMinAggregateInputType = {
    id?: true
    coop_number?: true
    date?: true
    count?: true
  }

  export type EggMaxAggregateInputType = {
    id?: true
    coop_number?: true
    date?: true
    count?: true
  }

  export type EggCountAggregateInputType = {
    id?: true
    coop_number?: true
    date?: true
    count?: true
    _all?: true
  }

  export type EggAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Egg to aggregate.
     */
    where?: EggWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eggs to fetch.
     */
    orderBy?: EggOrderByWithRelationInput | EggOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EggWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eggs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eggs
    **/
    _count?: true | EggCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EggAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EggSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EggMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EggMaxAggregateInputType
  }

  export type GetEggAggregateType<T extends EggAggregateArgs> = {
        [P in keyof T & keyof AggregateEgg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEgg[P]>
      : GetScalarType<T[P], AggregateEgg[P]>
  }




  export type EggGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EggWhereInput
    orderBy?: EggOrderByWithAggregationInput | EggOrderByWithAggregationInput[]
    by: EggScalarFieldEnum[] | EggScalarFieldEnum
    having?: EggScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EggCountAggregateInputType | true
    _avg?: EggAvgAggregateInputType
    _sum?: EggSumAggregateInputType
    _min?: EggMinAggregateInputType
    _max?: EggMaxAggregateInputType
  }

  export type EggGroupByOutputType = {
    id: number
    coop_number: number
    date: Date
    count: number
    _count: EggCountAggregateOutputType | null
    _avg: EggAvgAggregateOutputType | null
    _sum: EggSumAggregateOutputType | null
    _min: EggMinAggregateOutputType | null
    _max: EggMaxAggregateOutputType | null
  }

  type GetEggGroupByPayload<T extends EggGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EggGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EggGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EggGroupByOutputType[P]>
            : GetScalarType<T[P], EggGroupByOutputType[P]>
        }
      >
    >


  export type EggSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["egg"]>

  export type EggSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["egg"]>

  export type EggSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["egg"]>

  export type EggSelectScalar = {
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
  }

  export type EggOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coop_number" | "date" | "count", ExtArgs["result"]["egg"]>

  export type $EggPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Egg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coop_number: number
      date: Date
      count: number
    }, ExtArgs["result"]["egg"]>
    composites: {}
  }

  type EggGetPayload<S extends boolean | null | undefined | EggDefaultArgs> = $Result.GetResult<Prisma.$EggPayload, S>

  type EggCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EggFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EggCountAggregateInputType | true
    }

  export interface EggDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Egg'], meta: { name: 'Egg' } }
    /**
     * Find zero or one Egg that matches the filter.
     * @param {EggFindUniqueArgs} args - Arguments to find a Egg
     * @example
     * // Get one Egg
     * const egg = await prisma.egg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EggFindUniqueArgs>(args: SelectSubset<T, EggFindUniqueArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Egg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EggFindUniqueOrThrowArgs} args - Arguments to find a Egg
     * @example
     * // Get one Egg
     * const egg = await prisma.egg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EggFindUniqueOrThrowArgs>(args: SelectSubset<T, EggFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggFindFirstArgs} args - Arguments to find a Egg
     * @example
     * // Get one Egg
     * const egg = await prisma.egg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EggFindFirstArgs>(args?: SelectSubset<T, EggFindFirstArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggFindFirstOrThrowArgs} args - Arguments to find a Egg
     * @example
     * // Get one Egg
     * const egg = await prisma.egg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EggFindFirstOrThrowArgs>(args?: SelectSubset<T, EggFindFirstOrThrowArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eggs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eggs
     * const eggs = await prisma.egg.findMany()
     * 
     * // Get first 10 Eggs
     * const eggs = await prisma.egg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eggWithIdOnly = await prisma.egg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EggFindManyArgs>(args?: SelectSubset<T, EggFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Egg.
     * @param {EggCreateArgs} args - Arguments to create a Egg.
     * @example
     * // Create one Egg
     * const Egg = await prisma.egg.create({
     *   data: {
     *     // ... data to create a Egg
     *   }
     * })
     * 
     */
    create<T extends EggCreateArgs>(args: SelectSubset<T, EggCreateArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eggs.
     * @param {EggCreateManyArgs} args - Arguments to create many Eggs.
     * @example
     * // Create many Eggs
     * const egg = await prisma.egg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EggCreateManyArgs>(args?: SelectSubset<T, EggCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eggs and returns the data saved in the database.
     * @param {EggCreateManyAndReturnArgs} args - Arguments to create many Eggs.
     * @example
     * // Create many Eggs
     * const egg = await prisma.egg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eggs and only return the `id`
     * const eggWithIdOnly = await prisma.egg.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EggCreateManyAndReturnArgs>(args?: SelectSubset<T, EggCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Egg.
     * @param {EggDeleteArgs} args - Arguments to delete one Egg.
     * @example
     * // Delete one Egg
     * const Egg = await prisma.egg.delete({
     *   where: {
     *     // ... filter to delete one Egg
     *   }
     * })
     * 
     */
    delete<T extends EggDeleteArgs>(args: SelectSubset<T, EggDeleteArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Egg.
     * @param {EggUpdateArgs} args - Arguments to update one Egg.
     * @example
     * // Update one Egg
     * const egg = await prisma.egg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EggUpdateArgs>(args: SelectSubset<T, EggUpdateArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eggs.
     * @param {EggDeleteManyArgs} args - Arguments to filter Eggs to delete.
     * @example
     * // Delete a few Eggs
     * const { count } = await prisma.egg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EggDeleteManyArgs>(args?: SelectSubset<T, EggDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eggs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eggs
     * const egg = await prisma.egg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EggUpdateManyArgs>(args: SelectSubset<T, EggUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eggs and returns the data updated in the database.
     * @param {EggUpdateManyAndReturnArgs} args - Arguments to update many Eggs.
     * @example
     * // Update many Eggs
     * const egg = await prisma.egg.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eggs and only return the `id`
     * const eggWithIdOnly = await prisma.egg.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EggUpdateManyAndReturnArgs>(args: SelectSubset<T, EggUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Egg.
     * @param {EggUpsertArgs} args - Arguments to update or create a Egg.
     * @example
     * // Update or create a Egg
     * const egg = await prisma.egg.upsert({
     *   create: {
     *     // ... data to create a Egg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Egg we want to update
     *   }
     * })
     */
    upsert<T extends EggUpsertArgs>(args: SelectSubset<T, EggUpsertArgs<ExtArgs>>): Prisma__EggClient<$Result.GetResult<Prisma.$EggPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eggs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggCountArgs} args - Arguments to filter Eggs to count.
     * @example
     * // Count the number of Eggs
     * const count = await prisma.egg.count({
     *   where: {
     *     // ... the filter for the Eggs we want to count
     *   }
     * })
    **/
    count<T extends EggCountArgs>(
      args?: Subset<T, EggCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EggCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Egg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EggAggregateArgs>(args: Subset<T, EggAggregateArgs>): Prisma.PrismaPromise<GetEggAggregateType<T>>

    /**
     * Group by Egg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EggGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EggGroupByArgs['orderBy'] }
        : { orderBy?: EggGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EggGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEggGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Egg model
   */
  readonly fields: EggFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Egg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EggClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Egg model
   */
  interface EggFieldRefs {
    readonly id: FieldRef<"Egg", 'Int'>
    readonly coop_number: FieldRef<"Egg", 'Int'>
    readonly date: FieldRef<"Egg", 'DateTime'>
    readonly count: FieldRef<"Egg", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Egg findUnique
   */
  export type EggFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * Filter, which Egg to fetch.
     */
    where: EggWhereUniqueInput
  }

  /**
   * Egg findUniqueOrThrow
   */
  export type EggFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * Filter, which Egg to fetch.
     */
    where: EggWhereUniqueInput
  }

  /**
   * Egg findFirst
   */
  export type EggFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * Filter, which Egg to fetch.
     */
    where?: EggWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eggs to fetch.
     */
    orderBy?: EggOrderByWithRelationInput | EggOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eggs.
     */
    cursor?: EggWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eggs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eggs.
     */
    distinct?: EggScalarFieldEnum | EggScalarFieldEnum[]
  }

  /**
   * Egg findFirstOrThrow
   */
  export type EggFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * Filter, which Egg to fetch.
     */
    where?: EggWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eggs to fetch.
     */
    orderBy?: EggOrderByWithRelationInput | EggOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eggs.
     */
    cursor?: EggWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eggs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eggs.
     */
    distinct?: EggScalarFieldEnum | EggScalarFieldEnum[]
  }

  /**
   * Egg findMany
   */
  export type EggFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * Filter, which Eggs to fetch.
     */
    where?: EggWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eggs to fetch.
     */
    orderBy?: EggOrderByWithRelationInput | EggOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eggs.
     */
    cursor?: EggWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eggs.
     */
    skip?: number
    distinct?: EggScalarFieldEnum | EggScalarFieldEnum[]
  }

  /**
   * Egg create
   */
  export type EggCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * The data needed to create a Egg.
     */
    data: XOR<EggCreateInput, EggUncheckedCreateInput>
  }

  /**
   * Egg createMany
   */
  export type EggCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eggs.
     */
    data: EggCreateManyInput | EggCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Egg createManyAndReturn
   */
  export type EggCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * The data used to create many Eggs.
     */
    data: EggCreateManyInput | EggCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Egg update
   */
  export type EggUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * The data needed to update a Egg.
     */
    data: XOR<EggUpdateInput, EggUncheckedUpdateInput>
    /**
     * Choose, which Egg to update.
     */
    where: EggWhereUniqueInput
  }

  /**
   * Egg updateMany
   */
  export type EggUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eggs.
     */
    data: XOR<EggUpdateManyMutationInput, EggUncheckedUpdateManyInput>
    /**
     * Filter which Eggs to update
     */
    where?: EggWhereInput
    /**
     * Limit how many Eggs to update.
     */
    limit?: number
  }

  /**
   * Egg updateManyAndReturn
   */
  export type EggUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * The data used to update Eggs.
     */
    data: XOR<EggUpdateManyMutationInput, EggUncheckedUpdateManyInput>
    /**
     * Filter which Eggs to update
     */
    where?: EggWhereInput
    /**
     * Limit how many Eggs to update.
     */
    limit?: number
  }

  /**
   * Egg upsert
   */
  export type EggUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * The filter to search for the Egg to update in case it exists.
     */
    where: EggWhereUniqueInput
    /**
     * In case the Egg found by the `where` argument doesn't exist, create a new Egg with this data.
     */
    create: XOR<EggCreateInput, EggUncheckedCreateInput>
    /**
     * In case the Egg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EggUpdateInput, EggUncheckedUpdateInput>
  }

  /**
   * Egg delete
   */
  export type EggDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
    /**
     * Filter which Egg to delete.
     */
    where: EggWhereUniqueInput
  }

  /**
   * Egg deleteMany
   */
  export type EggDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eggs to delete
     */
    where?: EggWhereInput
    /**
     * Limit how many Eggs to delete.
     */
    limit?: number
  }

  /**
   * Egg without action
   */
  export type EggDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egg
     */
    select?: EggSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egg
     */
    omit?: EggOmit<ExtArgs> | null
  }


  /**
   * Model DeadChicken
   */

  export type AggregateDeadChicken = {
    _count: DeadChickenCountAggregateOutputType | null
    _avg: DeadChickenAvgAggregateOutputType | null
    _sum: DeadChickenSumAggregateOutputType | null
    _min: DeadChickenMinAggregateOutputType | null
    _max: DeadChickenMaxAggregateOutputType | null
  }

  export type DeadChickenAvgAggregateOutputType = {
    id: number | null
    coop_number: number | null
    count: number | null
  }

  export type DeadChickenSumAggregateOutputType = {
    id: number | null
    coop_number: number | null
    count: number | null
  }

  export type DeadChickenMinAggregateOutputType = {
    id: number | null
    coop_number: number | null
    date: Date | null
    count: number | null
    cause_of_death: string | null
  }

  export type DeadChickenMaxAggregateOutputType = {
    id: number | null
    coop_number: number | null
    date: Date | null
    count: number | null
    cause_of_death: string | null
  }

  export type DeadChickenCountAggregateOutputType = {
    id: number
    coop_number: number
    date: number
    count: number
    cause_of_death: number
    _all: number
  }


  export type DeadChickenAvgAggregateInputType = {
    id?: true
    coop_number?: true
    count?: true
  }

  export type DeadChickenSumAggregateInputType = {
    id?: true
    coop_number?: true
    count?: true
  }

  export type DeadChickenMinAggregateInputType = {
    id?: true
    coop_number?: true
    date?: true
    count?: true
    cause_of_death?: true
  }

  export type DeadChickenMaxAggregateInputType = {
    id?: true
    coop_number?: true
    date?: true
    count?: true
    cause_of_death?: true
  }

  export type DeadChickenCountAggregateInputType = {
    id?: true
    coop_number?: true
    date?: true
    count?: true
    cause_of_death?: true
    _all?: true
  }

  export type DeadChickenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeadChicken to aggregate.
     */
    where?: DeadChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeadChickens to fetch.
     */
    orderBy?: DeadChickenOrderByWithRelationInput | DeadChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeadChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeadChickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeadChickens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeadChickens
    **/
    _count?: true | DeadChickenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeadChickenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeadChickenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeadChickenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeadChickenMaxAggregateInputType
  }

  export type GetDeadChickenAggregateType<T extends DeadChickenAggregateArgs> = {
        [P in keyof T & keyof AggregateDeadChicken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeadChicken[P]>
      : GetScalarType<T[P], AggregateDeadChicken[P]>
  }




  export type DeadChickenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeadChickenWhereInput
    orderBy?: DeadChickenOrderByWithAggregationInput | DeadChickenOrderByWithAggregationInput[]
    by: DeadChickenScalarFieldEnum[] | DeadChickenScalarFieldEnum
    having?: DeadChickenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeadChickenCountAggregateInputType | true
    _avg?: DeadChickenAvgAggregateInputType
    _sum?: DeadChickenSumAggregateInputType
    _min?: DeadChickenMinAggregateInputType
    _max?: DeadChickenMaxAggregateInputType
  }

  export type DeadChickenGroupByOutputType = {
    id: number
    coop_number: number
    date: Date
    count: number
    cause_of_death: string
    _count: DeadChickenCountAggregateOutputType | null
    _avg: DeadChickenAvgAggregateOutputType | null
    _sum: DeadChickenSumAggregateOutputType | null
    _min: DeadChickenMinAggregateOutputType | null
    _max: DeadChickenMaxAggregateOutputType | null
  }

  type GetDeadChickenGroupByPayload<T extends DeadChickenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeadChickenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeadChickenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeadChickenGroupByOutputType[P]>
            : GetScalarType<T[P], DeadChickenGroupByOutputType[P]>
        }
      >
    >


  export type DeadChickenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
    cause_of_death?: boolean
  }, ExtArgs["result"]["deadChicken"]>

  export type DeadChickenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
    cause_of_death?: boolean
  }, ExtArgs["result"]["deadChicken"]>

  export type DeadChickenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
    cause_of_death?: boolean
  }, ExtArgs["result"]["deadChicken"]>

  export type DeadChickenSelectScalar = {
    id?: boolean
    coop_number?: boolean
    date?: boolean
    count?: boolean
    cause_of_death?: boolean
  }

  export type DeadChickenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coop_number" | "date" | "count" | "cause_of_death", ExtArgs["result"]["deadChicken"]>

  export type $DeadChickenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeadChicken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coop_number: number
      date: Date
      count: number
      cause_of_death: string
    }, ExtArgs["result"]["deadChicken"]>
    composites: {}
  }

  type DeadChickenGetPayload<S extends boolean | null | undefined | DeadChickenDefaultArgs> = $Result.GetResult<Prisma.$DeadChickenPayload, S>

  type DeadChickenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeadChickenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeadChickenCountAggregateInputType | true
    }

  export interface DeadChickenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeadChicken'], meta: { name: 'DeadChicken' } }
    /**
     * Find zero or one DeadChicken that matches the filter.
     * @param {DeadChickenFindUniqueArgs} args - Arguments to find a DeadChicken
     * @example
     * // Get one DeadChicken
     * const deadChicken = await prisma.deadChicken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeadChickenFindUniqueArgs>(args: SelectSubset<T, DeadChickenFindUniqueArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeadChicken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeadChickenFindUniqueOrThrowArgs} args - Arguments to find a DeadChicken
     * @example
     * // Get one DeadChicken
     * const deadChicken = await prisma.deadChicken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeadChickenFindUniqueOrThrowArgs>(args: SelectSubset<T, DeadChickenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeadChicken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenFindFirstArgs} args - Arguments to find a DeadChicken
     * @example
     * // Get one DeadChicken
     * const deadChicken = await prisma.deadChicken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeadChickenFindFirstArgs>(args?: SelectSubset<T, DeadChickenFindFirstArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeadChicken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenFindFirstOrThrowArgs} args - Arguments to find a DeadChicken
     * @example
     * // Get one DeadChicken
     * const deadChicken = await prisma.deadChicken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeadChickenFindFirstOrThrowArgs>(args?: SelectSubset<T, DeadChickenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeadChickens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeadChickens
     * const deadChickens = await prisma.deadChicken.findMany()
     * 
     * // Get first 10 DeadChickens
     * const deadChickens = await prisma.deadChicken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deadChickenWithIdOnly = await prisma.deadChicken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeadChickenFindManyArgs>(args?: SelectSubset<T, DeadChickenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeadChicken.
     * @param {DeadChickenCreateArgs} args - Arguments to create a DeadChicken.
     * @example
     * // Create one DeadChicken
     * const DeadChicken = await prisma.deadChicken.create({
     *   data: {
     *     // ... data to create a DeadChicken
     *   }
     * })
     * 
     */
    create<T extends DeadChickenCreateArgs>(args: SelectSubset<T, DeadChickenCreateArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeadChickens.
     * @param {DeadChickenCreateManyArgs} args - Arguments to create many DeadChickens.
     * @example
     * // Create many DeadChickens
     * const deadChicken = await prisma.deadChicken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeadChickenCreateManyArgs>(args?: SelectSubset<T, DeadChickenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeadChickens and returns the data saved in the database.
     * @param {DeadChickenCreateManyAndReturnArgs} args - Arguments to create many DeadChickens.
     * @example
     * // Create many DeadChickens
     * const deadChicken = await prisma.deadChicken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeadChickens and only return the `id`
     * const deadChickenWithIdOnly = await prisma.deadChicken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeadChickenCreateManyAndReturnArgs>(args?: SelectSubset<T, DeadChickenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeadChicken.
     * @param {DeadChickenDeleteArgs} args - Arguments to delete one DeadChicken.
     * @example
     * // Delete one DeadChicken
     * const DeadChicken = await prisma.deadChicken.delete({
     *   where: {
     *     // ... filter to delete one DeadChicken
     *   }
     * })
     * 
     */
    delete<T extends DeadChickenDeleteArgs>(args: SelectSubset<T, DeadChickenDeleteArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeadChicken.
     * @param {DeadChickenUpdateArgs} args - Arguments to update one DeadChicken.
     * @example
     * // Update one DeadChicken
     * const deadChicken = await prisma.deadChicken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeadChickenUpdateArgs>(args: SelectSubset<T, DeadChickenUpdateArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeadChickens.
     * @param {DeadChickenDeleteManyArgs} args - Arguments to filter DeadChickens to delete.
     * @example
     * // Delete a few DeadChickens
     * const { count } = await prisma.deadChicken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeadChickenDeleteManyArgs>(args?: SelectSubset<T, DeadChickenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeadChickens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeadChickens
     * const deadChicken = await prisma.deadChicken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeadChickenUpdateManyArgs>(args: SelectSubset<T, DeadChickenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeadChickens and returns the data updated in the database.
     * @param {DeadChickenUpdateManyAndReturnArgs} args - Arguments to update many DeadChickens.
     * @example
     * // Update many DeadChickens
     * const deadChicken = await prisma.deadChicken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeadChickens and only return the `id`
     * const deadChickenWithIdOnly = await prisma.deadChicken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeadChickenUpdateManyAndReturnArgs>(args: SelectSubset<T, DeadChickenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeadChicken.
     * @param {DeadChickenUpsertArgs} args - Arguments to update or create a DeadChicken.
     * @example
     * // Update or create a DeadChicken
     * const deadChicken = await prisma.deadChicken.upsert({
     *   create: {
     *     // ... data to create a DeadChicken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeadChicken we want to update
     *   }
     * })
     */
    upsert<T extends DeadChickenUpsertArgs>(args: SelectSubset<T, DeadChickenUpsertArgs<ExtArgs>>): Prisma__DeadChickenClient<$Result.GetResult<Prisma.$DeadChickenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeadChickens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenCountArgs} args - Arguments to filter DeadChickens to count.
     * @example
     * // Count the number of DeadChickens
     * const count = await prisma.deadChicken.count({
     *   where: {
     *     // ... the filter for the DeadChickens we want to count
     *   }
     * })
    **/
    count<T extends DeadChickenCountArgs>(
      args?: Subset<T, DeadChickenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeadChickenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeadChicken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeadChickenAggregateArgs>(args: Subset<T, DeadChickenAggregateArgs>): Prisma.PrismaPromise<GetDeadChickenAggregateType<T>>

    /**
     * Group by DeadChicken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeadChickenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeadChickenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeadChickenGroupByArgs['orderBy'] }
        : { orderBy?: DeadChickenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeadChickenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeadChickenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeadChicken model
   */
  readonly fields: DeadChickenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeadChicken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeadChickenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeadChicken model
   */
  interface DeadChickenFieldRefs {
    readonly id: FieldRef<"DeadChicken", 'Int'>
    readonly coop_number: FieldRef<"DeadChicken", 'Int'>
    readonly date: FieldRef<"DeadChicken", 'DateTime'>
    readonly count: FieldRef<"DeadChicken", 'Int'>
    readonly cause_of_death: FieldRef<"DeadChicken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeadChicken findUnique
   */
  export type DeadChickenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * Filter, which DeadChicken to fetch.
     */
    where: DeadChickenWhereUniqueInput
  }

  /**
   * DeadChicken findUniqueOrThrow
   */
  export type DeadChickenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * Filter, which DeadChicken to fetch.
     */
    where: DeadChickenWhereUniqueInput
  }

  /**
   * DeadChicken findFirst
   */
  export type DeadChickenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * Filter, which DeadChicken to fetch.
     */
    where?: DeadChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeadChickens to fetch.
     */
    orderBy?: DeadChickenOrderByWithRelationInput | DeadChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeadChickens.
     */
    cursor?: DeadChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeadChickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeadChickens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeadChickens.
     */
    distinct?: DeadChickenScalarFieldEnum | DeadChickenScalarFieldEnum[]
  }

  /**
   * DeadChicken findFirstOrThrow
   */
  export type DeadChickenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * Filter, which DeadChicken to fetch.
     */
    where?: DeadChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeadChickens to fetch.
     */
    orderBy?: DeadChickenOrderByWithRelationInput | DeadChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeadChickens.
     */
    cursor?: DeadChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeadChickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeadChickens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeadChickens.
     */
    distinct?: DeadChickenScalarFieldEnum | DeadChickenScalarFieldEnum[]
  }

  /**
   * DeadChicken findMany
   */
  export type DeadChickenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * Filter, which DeadChickens to fetch.
     */
    where?: DeadChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeadChickens to fetch.
     */
    orderBy?: DeadChickenOrderByWithRelationInput | DeadChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeadChickens.
     */
    cursor?: DeadChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeadChickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeadChickens.
     */
    skip?: number
    distinct?: DeadChickenScalarFieldEnum | DeadChickenScalarFieldEnum[]
  }

  /**
   * DeadChicken create
   */
  export type DeadChickenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * The data needed to create a DeadChicken.
     */
    data: XOR<DeadChickenCreateInput, DeadChickenUncheckedCreateInput>
  }

  /**
   * DeadChicken createMany
   */
  export type DeadChickenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeadChickens.
     */
    data: DeadChickenCreateManyInput | DeadChickenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeadChicken createManyAndReturn
   */
  export type DeadChickenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * The data used to create many DeadChickens.
     */
    data: DeadChickenCreateManyInput | DeadChickenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeadChicken update
   */
  export type DeadChickenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * The data needed to update a DeadChicken.
     */
    data: XOR<DeadChickenUpdateInput, DeadChickenUncheckedUpdateInput>
    /**
     * Choose, which DeadChicken to update.
     */
    where: DeadChickenWhereUniqueInput
  }

  /**
   * DeadChicken updateMany
   */
  export type DeadChickenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeadChickens.
     */
    data: XOR<DeadChickenUpdateManyMutationInput, DeadChickenUncheckedUpdateManyInput>
    /**
     * Filter which DeadChickens to update
     */
    where?: DeadChickenWhereInput
    /**
     * Limit how many DeadChickens to update.
     */
    limit?: number
  }

  /**
   * DeadChicken updateManyAndReturn
   */
  export type DeadChickenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * The data used to update DeadChickens.
     */
    data: XOR<DeadChickenUpdateManyMutationInput, DeadChickenUncheckedUpdateManyInput>
    /**
     * Filter which DeadChickens to update
     */
    where?: DeadChickenWhereInput
    /**
     * Limit how many DeadChickens to update.
     */
    limit?: number
  }

  /**
   * DeadChicken upsert
   */
  export type DeadChickenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * The filter to search for the DeadChicken to update in case it exists.
     */
    where: DeadChickenWhereUniqueInput
    /**
     * In case the DeadChicken found by the `where` argument doesn't exist, create a new DeadChicken with this data.
     */
    create: XOR<DeadChickenCreateInput, DeadChickenUncheckedCreateInput>
    /**
     * In case the DeadChicken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeadChickenUpdateInput, DeadChickenUncheckedUpdateInput>
  }

  /**
   * DeadChicken delete
   */
  export type DeadChickenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
    /**
     * Filter which DeadChicken to delete.
     */
    where: DeadChickenWhereUniqueInput
  }

  /**
   * DeadChicken deleteMany
   */
  export type DeadChickenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeadChickens to delete
     */
    where?: DeadChickenWhereInput
    /**
     * Limit how many DeadChickens to delete.
     */
    limit?: number
  }

  /**
   * DeadChicken without action
   */
  export type DeadChickenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeadChicken
     */
    select?: DeadChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeadChicken
     */
    omit?: DeadChickenOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone_number: string | null
    email: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone_number: string | null
    email: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone_number: number
    email: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    email?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    email?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    email?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    address: string | null
    phone_number: string | null
    email: string | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    shipments?: boolean | Customer$shipmentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone_number" | "email", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | Customer$shipmentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      phone_number: string | null
      email: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipments<T extends Customer$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly phone_number: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.shipments
   */
  export type Customer$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    shipped_count: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    shipped_count: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    shipment_date: Date | null
    shipped_count: number | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    shipment_date: Date | null
    shipped_count: number | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    customerId: number
    shipment_date: number
    shipped_count: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    id?: true
    customerId?: true
    shipped_count?: true
  }

  export type ShipmentSumAggregateInputType = {
    id?: true
    customerId?: true
    shipped_count?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    customerId?: true
    shipment_date?: true
    shipped_count?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    customerId?: true
    shipment_date?: true
    shipped_count?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    customerId?: true
    shipment_date?: true
    shipped_count?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: number
    customerId: number
    shipment_date: Date
    shipped_count: number
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    shipment_date?: boolean
    shipped_count?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    shipment_date?: boolean
    shipped_count?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    shipment_date?: boolean
    shipped_count?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    customerId?: boolean
    shipment_date?: boolean
    shipped_count?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "shipment_date" | "shipped_count", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      shipment_date: Date
      shipped_count: number
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'Int'>
    readonly customerId: FieldRef<"Shipment", 'Int'>
    readonly shipment_date: FieldRef<"Shipment", 'DateTime'>
    readonly shipped_count: FieldRef<"Shipment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    item_name: string | null
    address: string | null
    phone_number: string | null
    email: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    item_name: string | null
    address: string | null
    phone_number: string | null
    email: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    item_name: number
    address: number
    phone_number: number
    email: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    item_name?: true
    address?: true
    phone_number?: true
    email?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    item_name?: true
    address?: true
    phone_number?: true
    email?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    item_name?: true
    address?: true
    phone_number?: true
    email?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    item_name: string
    address: string | null
    phone_number: string | null
    email: string | null
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    item_name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    Stock?: boolean | Supplier$StockArgs<ExtArgs>
    Threshold?: boolean | Supplier$ThresholdArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    item_name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    item_name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    item_name?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "item_name" | "address" | "phone_number" | "email", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stock?: boolean | Supplier$StockArgs<ExtArgs>
    Threshold?: boolean | Supplier$ThresholdArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      Stock: Prisma.$StockPayload<ExtArgs>[]
      Threshold: Prisma.$StockThresholdPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      item_name: string
      address: string | null
      phone_number: string | null
      email: string | null
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Stock<T extends Supplier$StockArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$StockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Threshold<T extends Supplier$ThresholdArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$ThresholdArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly item_name: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly phone_number: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.Stock
   */
  export type Supplier$StockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Supplier.Threshold
   */
  export type Supplier$ThresholdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    where?: StockThresholdWhereInput
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
    count: number | null
  }

  export type StockSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
    count: number | null
  }

  export type StockMinAggregateOutputType = {
    id: number | null
    supplierId: number | null
    count: number | null
  }

  export type StockMaxAggregateOutputType = {
    id: number | null
    supplierId: number | null
    count: number | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    supplierId: number
    count: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
    supplierId?: true
    count?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
    supplierId?: true
    count?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    supplierId?: true
    count?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    supplierId?: true
    count?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    supplierId?: true
    count?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: number
    supplierId: number
    count: number
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    count?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    count?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    count?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    supplierId?: boolean
    count?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "count", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type StockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplierId: number
      count: number
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'Int'>
    readonly supplierId: FieldRef<"Stock", 'Int'>
    readonly count: FieldRef<"Stock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model StockThreshold
   */

  export type AggregateStockThreshold = {
    _count: StockThresholdCountAggregateOutputType | null
    _avg: StockThresholdAvgAggregateOutputType | null
    _sum: StockThresholdSumAggregateOutputType | null
    _min: StockThresholdMinAggregateOutputType | null
    _max: StockThresholdMaxAggregateOutputType | null
  }

  export type StockThresholdAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
    alert_threshold: number | null
  }

  export type StockThresholdSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
    alert_threshold: number | null
  }

  export type StockThresholdMinAggregateOutputType = {
    id: number | null
    supplierId: number | null
    alert_threshold: number | null
  }

  export type StockThresholdMaxAggregateOutputType = {
    id: number | null
    supplierId: number | null
    alert_threshold: number | null
  }

  export type StockThresholdCountAggregateOutputType = {
    id: number
    supplierId: number
    alert_threshold: number
    _all: number
  }


  export type StockThresholdAvgAggregateInputType = {
    id?: true
    supplierId?: true
    alert_threshold?: true
  }

  export type StockThresholdSumAggregateInputType = {
    id?: true
    supplierId?: true
    alert_threshold?: true
  }

  export type StockThresholdMinAggregateInputType = {
    id?: true
    supplierId?: true
    alert_threshold?: true
  }

  export type StockThresholdMaxAggregateInputType = {
    id?: true
    supplierId?: true
    alert_threshold?: true
  }

  export type StockThresholdCountAggregateInputType = {
    id?: true
    supplierId?: true
    alert_threshold?: true
    _all?: true
  }

  export type StockThresholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockThreshold to aggregate.
     */
    where?: StockThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockThresholds to fetch.
     */
    orderBy?: StockThresholdOrderByWithRelationInput | StockThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockThresholds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockThresholds
    **/
    _count?: true | StockThresholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockThresholdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockThresholdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockThresholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockThresholdMaxAggregateInputType
  }

  export type GetStockThresholdAggregateType<T extends StockThresholdAggregateArgs> = {
        [P in keyof T & keyof AggregateStockThreshold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockThreshold[P]>
      : GetScalarType<T[P], AggregateStockThreshold[P]>
  }




  export type StockThresholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockThresholdWhereInput
    orderBy?: StockThresholdOrderByWithAggregationInput | StockThresholdOrderByWithAggregationInput[]
    by: StockThresholdScalarFieldEnum[] | StockThresholdScalarFieldEnum
    having?: StockThresholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockThresholdCountAggregateInputType | true
    _avg?: StockThresholdAvgAggregateInputType
    _sum?: StockThresholdSumAggregateInputType
    _min?: StockThresholdMinAggregateInputType
    _max?: StockThresholdMaxAggregateInputType
  }

  export type StockThresholdGroupByOutputType = {
    id: number
    supplierId: number
    alert_threshold: number
    _count: StockThresholdCountAggregateOutputType | null
    _avg: StockThresholdAvgAggregateOutputType | null
    _sum: StockThresholdSumAggregateOutputType | null
    _min: StockThresholdMinAggregateOutputType | null
    _max: StockThresholdMaxAggregateOutputType | null
  }

  type GetStockThresholdGroupByPayload<T extends StockThresholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockThresholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockThresholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockThresholdGroupByOutputType[P]>
            : GetScalarType<T[P], StockThresholdGroupByOutputType[P]>
        }
      >
    >


  export type StockThresholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    alert_threshold?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockThreshold"]>

  export type StockThresholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    alert_threshold?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockThreshold"]>

  export type StockThresholdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    alert_threshold?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockThreshold"]>

  export type StockThresholdSelectScalar = {
    id?: boolean
    supplierId?: boolean
    alert_threshold?: boolean
  }

  export type StockThresholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "alert_threshold", ExtArgs["result"]["stockThreshold"]>
  export type StockThresholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type StockThresholdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type StockThresholdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $StockThresholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockThreshold"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplierId: number
      alert_threshold: number
    }, ExtArgs["result"]["stockThreshold"]>
    composites: {}
  }

  type StockThresholdGetPayload<S extends boolean | null | undefined | StockThresholdDefaultArgs> = $Result.GetResult<Prisma.$StockThresholdPayload, S>

  type StockThresholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockThresholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockThresholdCountAggregateInputType | true
    }

  export interface StockThresholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockThreshold'], meta: { name: 'StockThreshold' } }
    /**
     * Find zero or one StockThreshold that matches the filter.
     * @param {StockThresholdFindUniqueArgs} args - Arguments to find a StockThreshold
     * @example
     * // Get one StockThreshold
     * const stockThreshold = await prisma.stockThreshold.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockThresholdFindUniqueArgs>(args: SelectSubset<T, StockThresholdFindUniqueArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockThreshold that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockThresholdFindUniqueOrThrowArgs} args - Arguments to find a StockThreshold
     * @example
     * // Get one StockThreshold
     * const stockThreshold = await prisma.stockThreshold.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockThresholdFindUniqueOrThrowArgs>(args: SelectSubset<T, StockThresholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockThreshold that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdFindFirstArgs} args - Arguments to find a StockThreshold
     * @example
     * // Get one StockThreshold
     * const stockThreshold = await prisma.stockThreshold.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockThresholdFindFirstArgs>(args?: SelectSubset<T, StockThresholdFindFirstArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockThreshold that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdFindFirstOrThrowArgs} args - Arguments to find a StockThreshold
     * @example
     * // Get one StockThreshold
     * const stockThreshold = await prisma.stockThreshold.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockThresholdFindFirstOrThrowArgs>(args?: SelectSubset<T, StockThresholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockThresholds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockThresholds
     * const stockThresholds = await prisma.stockThreshold.findMany()
     * 
     * // Get first 10 StockThresholds
     * const stockThresholds = await prisma.stockThreshold.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockThresholdWithIdOnly = await prisma.stockThreshold.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockThresholdFindManyArgs>(args?: SelectSubset<T, StockThresholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockThreshold.
     * @param {StockThresholdCreateArgs} args - Arguments to create a StockThreshold.
     * @example
     * // Create one StockThreshold
     * const StockThreshold = await prisma.stockThreshold.create({
     *   data: {
     *     // ... data to create a StockThreshold
     *   }
     * })
     * 
     */
    create<T extends StockThresholdCreateArgs>(args: SelectSubset<T, StockThresholdCreateArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockThresholds.
     * @param {StockThresholdCreateManyArgs} args - Arguments to create many StockThresholds.
     * @example
     * // Create many StockThresholds
     * const stockThreshold = await prisma.stockThreshold.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockThresholdCreateManyArgs>(args?: SelectSubset<T, StockThresholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockThresholds and returns the data saved in the database.
     * @param {StockThresholdCreateManyAndReturnArgs} args - Arguments to create many StockThresholds.
     * @example
     * // Create many StockThresholds
     * const stockThreshold = await prisma.stockThreshold.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockThresholds and only return the `id`
     * const stockThresholdWithIdOnly = await prisma.stockThreshold.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockThresholdCreateManyAndReturnArgs>(args?: SelectSubset<T, StockThresholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockThreshold.
     * @param {StockThresholdDeleteArgs} args - Arguments to delete one StockThreshold.
     * @example
     * // Delete one StockThreshold
     * const StockThreshold = await prisma.stockThreshold.delete({
     *   where: {
     *     // ... filter to delete one StockThreshold
     *   }
     * })
     * 
     */
    delete<T extends StockThresholdDeleteArgs>(args: SelectSubset<T, StockThresholdDeleteArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockThreshold.
     * @param {StockThresholdUpdateArgs} args - Arguments to update one StockThreshold.
     * @example
     * // Update one StockThreshold
     * const stockThreshold = await prisma.stockThreshold.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockThresholdUpdateArgs>(args: SelectSubset<T, StockThresholdUpdateArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockThresholds.
     * @param {StockThresholdDeleteManyArgs} args - Arguments to filter StockThresholds to delete.
     * @example
     * // Delete a few StockThresholds
     * const { count } = await prisma.stockThreshold.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockThresholdDeleteManyArgs>(args?: SelectSubset<T, StockThresholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockThresholds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockThresholds
     * const stockThreshold = await prisma.stockThreshold.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockThresholdUpdateManyArgs>(args: SelectSubset<T, StockThresholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockThresholds and returns the data updated in the database.
     * @param {StockThresholdUpdateManyAndReturnArgs} args - Arguments to update many StockThresholds.
     * @example
     * // Update many StockThresholds
     * const stockThreshold = await prisma.stockThreshold.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockThresholds and only return the `id`
     * const stockThresholdWithIdOnly = await prisma.stockThreshold.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockThresholdUpdateManyAndReturnArgs>(args: SelectSubset<T, StockThresholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockThreshold.
     * @param {StockThresholdUpsertArgs} args - Arguments to update or create a StockThreshold.
     * @example
     * // Update or create a StockThreshold
     * const stockThreshold = await prisma.stockThreshold.upsert({
     *   create: {
     *     // ... data to create a StockThreshold
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockThreshold we want to update
     *   }
     * })
     */
    upsert<T extends StockThresholdUpsertArgs>(args: SelectSubset<T, StockThresholdUpsertArgs<ExtArgs>>): Prisma__StockThresholdClient<$Result.GetResult<Prisma.$StockThresholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockThresholds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdCountArgs} args - Arguments to filter StockThresholds to count.
     * @example
     * // Count the number of StockThresholds
     * const count = await prisma.stockThreshold.count({
     *   where: {
     *     // ... the filter for the StockThresholds we want to count
     *   }
     * })
    **/
    count<T extends StockThresholdCountArgs>(
      args?: Subset<T, StockThresholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockThresholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockThreshold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockThresholdAggregateArgs>(args: Subset<T, StockThresholdAggregateArgs>): Prisma.PrismaPromise<GetStockThresholdAggregateType<T>>

    /**
     * Group by StockThreshold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockThresholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockThresholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockThresholdGroupByArgs['orderBy'] }
        : { orderBy?: StockThresholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockThresholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockThresholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockThreshold model
   */
  readonly fields: StockThresholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockThreshold.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockThresholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockThreshold model
   */
  interface StockThresholdFieldRefs {
    readonly id: FieldRef<"StockThreshold", 'Int'>
    readonly supplierId: FieldRef<"StockThreshold", 'Int'>
    readonly alert_threshold: FieldRef<"StockThreshold", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StockThreshold findUnique
   */
  export type StockThresholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * Filter, which StockThreshold to fetch.
     */
    where: StockThresholdWhereUniqueInput
  }

  /**
   * StockThreshold findUniqueOrThrow
   */
  export type StockThresholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * Filter, which StockThreshold to fetch.
     */
    where: StockThresholdWhereUniqueInput
  }

  /**
   * StockThreshold findFirst
   */
  export type StockThresholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * Filter, which StockThreshold to fetch.
     */
    where?: StockThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockThresholds to fetch.
     */
    orderBy?: StockThresholdOrderByWithRelationInput | StockThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockThresholds.
     */
    cursor?: StockThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockThresholds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockThresholds.
     */
    distinct?: StockThresholdScalarFieldEnum | StockThresholdScalarFieldEnum[]
  }

  /**
   * StockThreshold findFirstOrThrow
   */
  export type StockThresholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * Filter, which StockThreshold to fetch.
     */
    where?: StockThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockThresholds to fetch.
     */
    orderBy?: StockThresholdOrderByWithRelationInput | StockThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockThresholds.
     */
    cursor?: StockThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockThresholds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockThresholds.
     */
    distinct?: StockThresholdScalarFieldEnum | StockThresholdScalarFieldEnum[]
  }

  /**
   * StockThreshold findMany
   */
  export type StockThresholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * Filter, which StockThresholds to fetch.
     */
    where?: StockThresholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockThresholds to fetch.
     */
    orderBy?: StockThresholdOrderByWithRelationInput | StockThresholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockThresholds.
     */
    cursor?: StockThresholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockThresholds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockThresholds.
     */
    skip?: number
    distinct?: StockThresholdScalarFieldEnum | StockThresholdScalarFieldEnum[]
  }

  /**
   * StockThreshold create
   */
  export type StockThresholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * The data needed to create a StockThreshold.
     */
    data: XOR<StockThresholdCreateInput, StockThresholdUncheckedCreateInput>
  }

  /**
   * StockThreshold createMany
   */
  export type StockThresholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockThresholds.
     */
    data: StockThresholdCreateManyInput | StockThresholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockThreshold createManyAndReturn
   */
  export type StockThresholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * The data used to create many StockThresholds.
     */
    data: StockThresholdCreateManyInput | StockThresholdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockThreshold update
   */
  export type StockThresholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * The data needed to update a StockThreshold.
     */
    data: XOR<StockThresholdUpdateInput, StockThresholdUncheckedUpdateInput>
    /**
     * Choose, which StockThreshold to update.
     */
    where: StockThresholdWhereUniqueInput
  }

  /**
   * StockThreshold updateMany
   */
  export type StockThresholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockThresholds.
     */
    data: XOR<StockThresholdUpdateManyMutationInput, StockThresholdUncheckedUpdateManyInput>
    /**
     * Filter which StockThresholds to update
     */
    where?: StockThresholdWhereInput
    /**
     * Limit how many StockThresholds to update.
     */
    limit?: number
  }

  /**
   * StockThreshold updateManyAndReturn
   */
  export type StockThresholdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * The data used to update StockThresholds.
     */
    data: XOR<StockThresholdUpdateManyMutationInput, StockThresholdUncheckedUpdateManyInput>
    /**
     * Filter which StockThresholds to update
     */
    where?: StockThresholdWhereInput
    /**
     * Limit how many StockThresholds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockThreshold upsert
   */
  export type StockThresholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * The filter to search for the StockThreshold to update in case it exists.
     */
    where: StockThresholdWhereUniqueInput
    /**
     * In case the StockThreshold found by the `where` argument doesn't exist, create a new StockThreshold with this data.
     */
    create: XOR<StockThresholdCreateInput, StockThresholdUncheckedCreateInput>
    /**
     * In case the StockThreshold was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockThresholdUpdateInput, StockThresholdUncheckedUpdateInput>
  }

  /**
   * StockThreshold delete
   */
  export type StockThresholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
    /**
     * Filter which StockThreshold to delete.
     */
    where: StockThresholdWhereUniqueInput
  }

  /**
   * StockThreshold deleteMany
   */
  export type StockThresholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockThresholds to delete
     */
    where?: StockThresholdWhereInput
    /**
     * Limit how many StockThresholds to delete.
     */
    limit?: number
  }

  /**
   * StockThreshold without action
   */
  export type StockThresholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockThreshold
     */
    select?: StockThresholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockThreshold
     */
    omit?: StockThresholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockThresholdInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LoginInfoScalarFieldEnum: {
    id: 'id',
    login_type: 'login_type',
    password: 'password'
  };

  export type LoginInfoScalarFieldEnum = (typeof LoginInfoScalarFieldEnum)[keyof typeof LoginInfoScalarFieldEnum]


  export const EggScalarFieldEnum: {
    id: 'id',
    coop_number: 'coop_number',
    date: 'date',
    count: 'count'
  };

  export type EggScalarFieldEnum = (typeof EggScalarFieldEnum)[keyof typeof EggScalarFieldEnum]


  export const DeadChickenScalarFieldEnum: {
    id: 'id',
    coop_number: 'coop_number',
    date: 'date',
    count: 'count',
    cause_of_death: 'cause_of_death'
  };

  export type DeadChickenScalarFieldEnum = (typeof DeadChickenScalarFieldEnum)[keyof typeof DeadChickenScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone_number: 'phone_number',
    email: 'email'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    shipment_date: 'shipment_date',
    shipped_count: 'shipped_count'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    item_name: 'item_name',
    address: 'address',
    phone_number: 'phone_number',
    email: 'email'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    count: 'count'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const StockThresholdScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    alert_threshold: 'alert_threshold'
  };

  export type StockThresholdScalarFieldEnum = (typeof StockThresholdScalarFieldEnum)[keyof typeof StockThresholdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LoginInfoWhereInput = {
    AND?: LoginInfoWhereInput | LoginInfoWhereInput[]
    OR?: LoginInfoWhereInput[]
    NOT?: LoginInfoWhereInput | LoginInfoWhereInput[]
    id?: IntFilter<"LoginInfo"> | number
    login_type?: StringFilter<"LoginInfo"> | string
    password?: StringFilter<"LoginInfo"> | string
  }

  export type LoginInfoOrderByWithRelationInput = {
    id?: SortOrder
    login_type?: SortOrder
    password?: SortOrder
  }

  export type LoginInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoginInfoWhereInput | LoginInfoWhereInput[]
    OR?: LoginInfoWhereInput[]
    NOT?: LoginInfoWhereInput | LoginInfoWhereInput[]
    login_type?: StringFilter<"LoginInfo"> | string
    password?: StringFilter<"LoginInfo"> | string
  }, "id">

  export type LoginInfoOrderByWithAggregationInput = {
    id?: SortOrder
    login_type?: SortOrder
    password?: SortOrder
    _count?: LoginInfoCountOrderByAggregateInput
    _avg?: LoginInfoAvgOrderByAggregateInput
    _max?: LoginInfoMaxOrderByAggregateInput
    _min?: LoginInfoMinOrderByAggregateInput
    _sum?: LoginInfoSumOrderByAggregateInput
  }

  export type LoginInfoScalarWhereWithAggregatesInput = {
    AND?: LoginInfoScalarWhereWithAggregatesInput | LoginInfoScalarWhereWithAggregatesInput[]
    OR?: LoginInfoScalarWhereWithAggregatesInput[]
    NOT?: LoginInfoScalarWhereWithAggregatesInput | LoginInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoginInfo"> | number
    login_type?: StringWithAggregatesFilter<"LoginInfo"> | string
    password?: StringWithAggregatesFilter<"LoginInfo"> | string
  }

  export type EggWhereInput = {
    AND?: EggWhereInput | EggWhereInput[]
    OR?: EggWhereInput[]
    NOT?: EggWhereInput | EggWhereInput[]
    id?: IntFilter<"Egg"> | number
    coop_number?: IntFilter<"Egg"> | number
    date?: DateTimeFilter<"Egg"> | Date | string
    count?: IntFilter<"Egg"> | number
  }

  export type EggOrderByWithRelationInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type EggWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EggWhereInput | EggWhereInput[]
    OR?: EggWhereInput[]
    NOT?: EggWhereInput | EggWhereInput[]
    coop_number?: IntFilter<"Egg"> | number
    date?: DateTimeFilter<"Egg"> | Date | string
    count?: IntFilter<"Egg"> | number
  }, "id">

  export type EggOrderByWithAggregationInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
    _count?: EggCountOrderByAggregateInput
    _avg?: EggAvgOrderByAggregateInput
    _max?: EggMaxOrderByAggregateInput
    _min?: EggMinOrderByAggregateInput
    _sum?: EggSumOrderByAggregateInput
  }

  export type EggScalarWhereWithAggregatesInput = {
    AND?: EggScalarWhereWithAggregatesInput | EggScalarWhereWithAggregatesInput[]
    OR?: EggScalarWhereWithAggregatesInput[]
    NOT?: EggScalarWhereWithAggregatesInput | EggScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Egg"> | number
    coop_number?: IntWithAggregatesFilter<"Egg"> | number
    date?: DateTimeWithAggregatesFilter<"Egg"> | Date | string
    count?: IntWithAggregatesFilter<"Egg"> | number
  }

  export type DeadChickenWhereInput = {
    AND?: DeadChickenWhereInput | DeadChickenWhereInput[]
    OR?: DeadChickenWhereInput[]
    NOT?: DeadChickenWhereInput | DeadChickenWhereInput[]
    id?: IntFilter<"DeadChicken"> | number
    coop_number?: IntFilter<"DeadChicken"> | number
    date?: DateTimeFilter<"DeadChicken"> | Date | string
    count?: IntFilter<"DeadChicken"> | number
    cause_of_death?: StringFilter<"DeadChicken"> | string
  }

  export type DeadChickenOrderByWithRelationInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
    cause_of_death?: SortOrder
  }

  export type DeadChickenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeadChickenWhereInput | DeadChickenWhereInput[]
    OR?: DeadChickenWhereInput[]
    NOT?: DeadChickenWhereInput | DeadChickenWhereInput[]
    coop_number?: IntFilter<"DeadChicken"> | number
    date?: DateTimeFilter<"DeadChicken"> | Date | string
    count?: IntFilter<"DeadChicken"> | number
    cause_of_death?: StringFilter<"DeadChicken"> | string
  }, "id">

  export type DeadChickenOrderByWithAggregationInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
    cause_of_death?: SortOrder
    _count?: DeadChickenCountOrderByAggregateInput
    _avg?: DeadChickenAvgOrderByAggregateInput
    _max?: DeadChickenMaxOrderByAggregateInput
    _min?: DeadChickenMinOrderByAggregateInput
    _sum?: DeadChickenSumOrderByAggregateInput
  }

  export type DeadChickenScalarWhereWithAggregatesInput = {
    AND?: DeadChickenScalarWhereWithAggregatesInput | DeadChickenScalarWhereWithAggregatesInput[]
    OR?: DeadChickenScalarWhereWithAggregatesInput[]
    NOT?: DeadChickenScalarWhereWithAggregatesInput | DeadChickenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeadChicken"> | number
    coop_number?: IntWithAggregatesFilter<"DeadChicken"> | number
    date?: DateTimeWithAggregatesFilter<"DeadChicken"> | Date | string
    count?: IntWithAggregatesFilter<"DeadChicken"> | number
    cause_of_death?: StringWithAggregatesFilter<"DeadChicken"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    shipments?: ShipmentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    address?: StringNullableFilter<"Customer"> | string | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    shipments?: ShipmentListRelationFilter
  }, "id" | "name">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: IntFilter<"Shipment"> | number
    customerId?: IntFilter<"Shipment"> | number
    shipment_date?: DateTimeFilter<"Shipment"> | Date | string
    shipped_count?: IntFilter<"Shipment"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipment_date?: SortOrder
    shipped_count?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    customerId?: IntFilter<"Shipment"> | number
    shipment_date?: DateTimeFilter<"Shipment"> | Date | string
    shipped_count?: IntFilter<"Shipment"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipment_date?: SortOrder
    shipped_count?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shipment"> | number
    customerId?: IntWithAggregatesFilter<"Shipment"> | number
    shipment_date?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    shipped_count?: IntWithAggregatesFilter<"Shipment"> | number
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    item_name?: StringFilter<"Supplier"> | string
    address?: StringNullableFilter<"Supplier"> | string | null
    phone_number?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    Stock?: StockListRelationFilter
    Threshold?: XOR<StockThresholdNullableScalarRelationFilter, StockThresholdWhereInput> | null
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    item_name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    Stock?: StockOrderByRelationAggregateInput
    Threshold?: StockThresholdOrderByWithRelationInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    item_name?: StringFilter<"Supplier"> | string
    address?: StringNullableFilter<"Supplier"> | string | null
    phone_number?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    Stock?: StockListRelationFilter
    Threshold?: XOR<StockThresholdNullableScalarRelationFilter, StockThresholdWhereInput> | null
  }, "id" | "name">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    item_name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
    item_name?: StringWithAggregatesFilter<"Supplier"> | string
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: IntFilter<"Stock"> | number
    supplierId?: IntFilter<"Stock"> | number
    count?: IntFilter<"Stock"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    supplierId?: IntFilter<"Stock"> | number
    count?: IntFilter<"Stock"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stock"> | number
    supplierId?: IntWithAggregatesFilter<"Stock"> | number
    count?: IntWithAggregatesFilter<"Stock"> | number
  }

  export type StockThresholdWhereInput = {
    AND?: StockThresholdWhereInput | StockThresholdWhereInput[]
    OR?: StockThresholdWhereInput[]
    NOT?: StockThresholdWhereInput | StockThresholdWhereInput[]
    id?: IntFilter<"StockThreshold"> | number
    supplierId?: IntFilter<"StockThreshold"> | number
    alert_threshold?: IntFilter<"StockThreshold"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type StockThresholdOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type StockThresholdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    supplierId?: number
    AND?: StockThresholdWhereInput | StockThresholdWhereInput[]
    OR?: StockThresholdWhereInput[]
    NOT?: StockThresholdWhereInput | StockThresholdWhereInput[]
    alert_threshold?: IntFilter<"StockThreshold"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id" | "supplierId">

  export type StockThresholdOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
    _count?: StockThresholdCountOrderByAggregateInput
    _avg?: StockThresholdAvgOrderByAggregateInput
    _max?: StockThresholdMaxOrderByAggregateInput
    _min?: StockThresholdMinOrderByAggregateInput
    _sum?: StockThresholdSumOrderByAggregateInput
  }

  export type StockThresholdScalarWhereWithAggregatesInput = {
    AND?: StockThresholdScalarWhereWithAggregatesInput | StockThresholdScalarWhereWithAggregatesInput[]
    OR?: StockThresholdScalarWhereWithAggregatesInput[]
    NOT?: StockThresholdScalarWhereWithAggregatesInput | StockThresholdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockThreshold"> | number
    supplierId?: IntWithAggregatesFilter<"StockThreshold"> | number
    alert_threshold?: IntWithAggregatesFilter<"StockThreshold"> | number
  }

  export type LoginInfoCreateInput = {
    login_type: string
    password: string
  }

  export type LoginInfoUncheckedCreateInput = {
    id?: number
    login_type: string
    password: string
  }

  export type LoginInfoUpdateInput = {
    login_type?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    login_type?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginInfoCreateManyInput = {
    id?: number
    login_type: string
    password: string
  }

  export type LoginInfoUpdateManyMutationInput = {
    login_type?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    login_type?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EggCreateInput = {
    coop_number: number
    date?: Date | string
    count: number
  }

  export type EggUncheckedCreateInput = {
    id?: number
    coop_number: number
    date?: Date | string
    count: number
  }

  export type EggUpdateInput = {
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type EggUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type EggCreateManyInput = {
    id?: number
    coop_number: number
    date?: Date | string
    count: number
  }

  export type EggUpdateManyMutationInput = {
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type EggUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DeadChickenCreateInput = {
    coop_number: number
    date?: Date | string
    count: number
    cause_of_death: string
  }

  export type DeadChickenUncheckedCreateInput = {
    id?: number
    coop_number: number
    date?: Date | string
    count: number
    cause_of_death: string
  }

  export type DeadChickenUpdateInput = {
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    cause_of_death?: StringFieldUpdateOperationsInput | string
  }

  export type DeadChickenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    cause_of_death?: StringFieldUpdateOperationsInput | string
  }

  export type DeadChickenCreateManyInput = {
    id?: number
    coop_number: number
    date?: Date | string
    count: number
    cause_of_death: string
  }

  export type DeadChickenUpdateManyMutationInput = {
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    cause_of_death?: StringFieldUpdateOperationsInput | string
  }

  export type DeadChickenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coop_number?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    cause_of_death?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    name: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    shipments?: ShipmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    shipments?: ShipmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    shipments?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentCreateInput = {
    shipment_date?: Date | string
    shipped_count: number
    customer: CustomerCreateNestedOneWithoutShipmentsInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: number
    customerId: number
    shipment_date?: Date | string
    shipped_count: number
  }

  export type ShipmentUpdateInput = {
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentCreateManyInput = {
    id?: number
    customerId: number
    shipment_date?: Date | string
    shipped_count: number
  }

  export type ShipmentUpdateManyMutationInput = {
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierCreateInput = {
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    Stock?: StockCreateNestedManyWithoutSupplierInput
    Threshold?: StockThresholdCreateNestedOneWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    Stock?: StockUncheckedCreateNestedManyWithoutSupplierInput
    Threshold?: StockThresholdUncheckedCreateNestedOneWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Stock?: StockUpdateManyWithoutSupplierNestedInput
    Threshold?: StockThresholdUpdateOneWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Stock?: StockUncheckedUpdateManyWithoutSupplierNestedInput
    Threshold?: StockThresholdUncheckedUpdateOneWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockCreateInput = {
    count: number
    supplier: SupplierCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: number
    supplierId: number
    count: number
  }

  export type StockUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    supplier?: SupplierUpdateOneRequiredWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StockCreateManyInput = {
    id?: number
    supplierId: number
    count: number
  }

  export type StockUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StockThresholdCreateInput = {
    alert_threshold?: number
    supplier: SupplierCreateNestedOneWithoutThresholdInput
  }

  export type StockThresholdUncheckedCreateInput = {
    id?: number
    supplierId: number
    alert_threshold?: number
  }

  export type StockThresholdUpdateInput = {
    alert_threshold?: IntFieldUpdateOperationsInput | number
    supplier?: SupplierUpdateOneRequiredWithoutThresholdNestedInput
  }

  export type StockThresholdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    alert_threshold?: IntFieldUpdateOperationsInput | number
  }

  export type StockThresholdCreateManyInput = {
    id?: number
    supplierId: number
    alert_threshold?: number
  }

  export type StockThresholdUpdateManyMutationInput = {
    alert_threshold?: IntFieldUpdateOperationsInput | number
  }

  export type StockThresholdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    alert_threshold?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LoginInfoCountOrderByAggregateInput = {
    id?: SortOrder
    login_type?: SortOrder
    password?: SortOrder
  }

  export type LoginInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoginInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    login_type?: SortOrder
    password?: SortOrder
  }

  export type LoginInfoMinOrderByAggregateInput = {
    id?: SortOrder
    login_type?: SortOrder
    password?: SortOrder
  }

  export type LoginInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EggCountOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type EggAvgOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    count?: SortOrder
  }

  export type EggMaxOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type EggMinOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type EggSumOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    count?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeadChickenCountOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
    cause_of_death?: SortOrder
  }

  export type DeadChickenAvgOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    count?: SortOrder
  }

  export type DeadChickenMaxOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
    cause_of_death?: SortOrder
  }

  export type DeadChickenMinOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    date?: SortOrder
    count?: SortOrder
    cause_of_death?: SortOrder
  }

  export type DeadChickenSumOrderByAggregateInput = {
    id?: SortOrder
    coop_number?: SortOrder
    count?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipment_date?: SortOrder
    shipped_count?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipped_count?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipment_date?: SortOrder
    shipped_count?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipment_date?: SortOrder
    shipped_count?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    shipped_count?: SortOrder
  }

  export type StockListRelationFilter = {
    every?: StockWhereInput
    some?: StockWhereInput
    none?: StockWhereInput
  }

  export type StockThresholdNullableScalarRelationFilter = {
    is?: StockThresholdWhereInput | null
    isNot?: StockThresholdWhereInput | null
  }

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    item_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    item_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    item_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    count?: SortOrder
  }

  export type StockThresholdCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
  }

  export type StockThresholdAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
  }

  export type StockThresholdMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
  }

  export type StockThresholdMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
  }

  export type StockThresholdSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    alert_threshold?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShipmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ShipmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCustomerInput | ShipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCustomerInput | ShipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCustomerInput | ShipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCustomerInput | ShipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCustomerInput | ShipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCustomerInput | ShipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<CustomerCreateWithoutShipmentsInput, CustomerUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShipmentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<CustomerCreateWithoutShipmentsInput, CustomerUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShipmentsInput
    upsert?: CustomerUpsertWithoutShipmentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutShipmentsInput, CustomerUpdateWithoutShipmentsInput>, CustomerUncheckedUpdateWithoutShipmentsInput>
  }

  export type StockCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockCreateWithoutSupplierInput, StockUncheckedCreateWithoutSupplierInput> | StockCreateWithoutSupplierInput[] | StockUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockCreateOrConnectWithoutSupplierInput | StockCreateOrConnectWithoutSupplierInput[]
    createMany?: StockCreateManySupplierInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type StockThresholdCreateNestedOneWithoutSupplierInput = {
    create?: XOR<StockThresholdCreateWithoutSupplierInput, StockThresholdUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: StockThresholdCreateOrConnectWithoutSupplierInput
    connect?: StockThresholdWhereUniqueInput
  }

  export type StockUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockCreateWithoutSupplierInput, StockUncheckedCreateWithoutSupplierInput> | StockCreateWithoutSupplierInput[] | StockUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockCreateOrConnectWithoutSupplierInput | StockCreateOrConnectWithoutSupplierInput[]
    createMany?: StockCreateManySupplierInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type StockThresholdUncheckedCreateNestedOneWithoutSupplierInput = {
    create?: XOR<StockThresholdCreateWithoutSupplierInput, StockThresholdUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: StockThresholdCreateOrConnectWithoutSupplierInput
    connect?: StockThresholdWhereUniqueInput
  }

  export type StockUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockCreateWithoutSupplierInput, StockUncheckedCreateWithoutSupplierInput> | StockCreateWithoutSupplierInput[] | StockUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockCreateOrConnectWithoutSupplierInput | StockCreateOrConnectWithoutSupplierInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutSupplierInput | StockUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockCreateManySupplierInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutSupplierInput | StockUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockUpdateManyWithWhereWithoutSupplierInput | StockUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type StockThresholdUpdateOneWithoutSupplierNestedInput = {
    create?: XOR<StockThresholdCreateWithoutSupplierInput, StockThresholdUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: StockThresholdCreateOrConnectWithoutSupplierInput
    upsert?: StockThresholdUpsertWithoutSupplierInput
    disconnect?: StockThresholdWhereInput | boolean
    delete?: StockThresholdWhereInput | boolean
    connect?: StockThresholdWhereUniqueInput
    update?: XOR<XOR<StockThresholdUpdateToOneWithWhereWithoutSupplierInput, StockThresholdUpdateWithoutSupplierInput>, StockThresholdUncheckedUpdateWithoutSupplierInput>
  }

  export type StockUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockCreateWithoutSupplierInput, StockUncheckedCreateWithoutSupplierInput> | StockCreateWithoutSupplierInput[] | StockUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockCreateOrConnectWithoutSupplierInput | StockCreateOrConnectWithoutSupplierInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutSupplierInput | StockUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockCreateManySupplierInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutSupplierInput | StockUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockUpdateManyWithWhereWithoutSupplierInput | StockUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type StockThresholdUncheckedUpdateOneWithoutSupplierNestedInput = {
    create?: XOR<StockThresholdCreateWithoutSupplierInput, StockThresholdUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: StockThresholdCreateOrConnectWithoutSupplierInput
    upsert?: StockThresholdUpsertWithoutSupplierInput
    disconnect?: StockThresholdWhereInput | boolean
    delete?: StockThresholdWhereInput | boolean
    connect?: StockThresholdWhereUniqueInput
    update?: XOR<XOR<StockThresholdUpdateToOneWithWhereWithoutSupplierInput, StockThresholdUpdateWithoutSupplierInput>, StockThresholdUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierCreateNestedOneWithoutStockInput = {
    create?: XOR<SupplierCreateWithoutStockInput, SupplierUncheckedCreateWithoutStockInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<SupplierCreateWithoutStockInput, SupplierUncheckedCreateWithoutStockInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockInput
    upsert?: SupplierUpsertWithoutStockInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutStockInput, SupplierUpdateWithoutStockInput>, SupplierUncheckedUpdateWithoutStockInput>
  }

  export type SupplierCreateNestedOneWithoutThresholdInput = {
    create?: XOR<SupplierCreateWithoutThresholdInput, SupplierUncheckedCreateWithoutThresholdInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutThresholdInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutThresholdNestedInput = {
    create?: XOR<SupplierCreateWithoutThresholdInput, SupplierUncheckedCreateWithoutThresholdInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutThresholdInput
    upsert?: SupplierUpsertWithoutThresholdInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutThresholdInput, SupplierUpdateWithoutThresholdInput>, SupplierUncheckedUpdateWithoutThresholdInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ShipmentCreateWithoutCustomerInput = {
    shipment_date?: Date | string
    shipped_count: number
  }

  export type ShipmentUncheckedCreateWithoutCustomerInput = {
    id?: number
    shipment_date?: Date | string
    shipped_count: number
  }

  export type ShipmentCreateOrConnectWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentCreateManyCustomerInputEnvelope = {
    data: ShipmentCreateManyCustomerInput | ShipmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCustomerInput, ShipmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCustomerInput, ShipmentUncheckedUpdateWithoutCustomerInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCustomerInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: IntFilter<"Shipment"> | number
    customerId?: IntFilter<"Shipment"> | number
    shipment_date?: DateTimeFilter<"Shipment"> | Date | string
    shipped_count?: IntFilter<"Shipment"> | number
  }

  export type CustomerCreateWithoutShipmentsInput = {
    name: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
  }

  export type CustomerUncheckedCreateWithoutShipmentsInput = {
    id?: number
    name: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
  }

  export type CustomerCreateOrConnectWithoutShipmentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShipmentsInput, CustomerUncheckedCreateWithoutShipmentsInput>
  }

  export type CustomerUpsertWithoutShipmentsInput = {
    update: XOR<CustomerUpdateWithoutShipmentsInput, CustomerUncheckedUpdateWithoutShipmentsInput>
    create: XOR<CustomerCreateWithoutShipmentsInput, CustomerUncheckedCreateWithoutShipmentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutShipmentsInput, CustomerUncheckedUpdateWithoutShipmentsInput>
  }

  export type CustomerUpdateWithoutShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateWithoutShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockCreateWithoutSupplierInput = {
    count: number
  }

  export type StockUncheckedCreateWithoutSupplierInput = {
    id?: number
    count: number
  }

  export type StockCreateOrConnectWithoutSupplierInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutSupplierInput, StockUncheckedCreateWithoutSupplierInput>
  }

  export type StockCreateManySupplierInputEnvelope = {
    data: StockCreateManySupplierInput | StockCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type StockThresholdCreateWithoutSupplierInput = {
    alert_threshold?: number
  }

  export type StockThresholdUncheckedCreateWithoutSupplierInput = {
    id?: number
    alert_threshold?: number
  }

  export type StockThresholdCreateOrConnectWithoutSupplierInput = {
    where: StockThresholdWhereUniqueInput
    create: XOR<StockThresholdCreateWithoutSupplierInput, StockThresholdUncheckedCreateWithoutSupplierInput>
  }

  export type StockUpsertWithWhereUniqueWithoutSupplierInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutSupplierInput, StockUncheckedUpdateWithoutSupplierInput>
    create: XOR<StockCreateWithoutSupplierInput, StockUncheckedCreateWithoutSupplierInput>
  }

  export type StockUpdateWithWhereUniqueWithoutSupplierInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutSupplierInput, StockUncheckedUpdateWithoutSupplierInput>
  }

  export type StockUpdateManyWithWhereWithoutSupplierInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutSupplierInput>
  }

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[]
    OR?: StockScalarWhereInput[]
    NOT?: StockScalarWhereInput | StockScalarWhereInput[]
    id?: IntFilter<"Stock"> | number
    supplierId?: IntFilter<"Stock"> | number
    count?: IntFilter<"Stock"> | number
  }

  export type StockThresholdUpsertWithoutSupplierInput = {
    update: XOR<StockThresholdUpdateWithoutSupplierInput, StockThresholdUncheckedUpdateWithoutSupplierInput>
    create: XOR<StockThresholdCreateWithoutSupplierInput, StockThresholdUncheckedCreateWithoutSupplierInput>
    where?: StockThresholdWhereInput
  }

  export type StockThresholdUpdateToOneWithWhereWithoutSupplierInput = {
    where?: StockThresholdWhereInput
    data: XOR<StockThresholdUpdateWithoutSupplierInput, StockThresholdUncheckedUpdateWithoutSupplierInput>
  }

  export type StockThresholdUpdateWithoutSupplierInput = {
    alert_threshold?: IntFieldUpdateOperationsInput | number
  }

  export type StockThresholdUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    alert_threshold?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierCreateWithoutStockInput = {
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    Threshold?: StockThresholdCreateNestedOneWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutStockInput = {
    id?: number
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    Threshold?: StockThresholdUncheckedCreateNestedOneWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutStockInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutStockInput, SupplierUncheckedCreateWithoutStockInput>
  }

  export type SupplierUpsertWithoutStockInput = {
    update: XOR<SupplierUpdateWithoutStockInput, SupplierUncheckedUpdateWithoutStockInput>
    create: XOR<SupplierCreateWithoutStockInput, SupplierUncheckedCreateWithoutStockInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutStockInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutStockInput, SupplierUncheckedUpdateWithoutStockInput>
  }

  export type SupplierUpdateWithoutStockInput = {
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Threshold?: StockThresholdUpdateOneWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Threshold?: StockThresholdUncheckedUpdateOneWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutThresholdInput = {
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    Stock?: StockCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutThresholdInput = {
    id?: number
    name: string
    item_name?: string
    address?: string | null
    phone_number?: string | null
    email?: string | null
    Stock?: StockUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutThresholdInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutThresholdInput, SupplierUncheckedCreateWithoutThresholdInput>
  }

  export type SupplierUpsertWithoutThresholdInput = {
    update: XOR<SupplierUpdateWithoutThresholdInput, SupplierUncheckedUpdateWithoutThresholdInput>
    create: XOR<SupplierCreateWithoutThresholdInput, SupplierUncheckedCreateWithoutThresholdInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutThresholdInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutThresholdInput, SupplierUncheckedUpdateWithoutThresholdInput>
  }

  export type SupplierUpdateWithoutThresholdInput = {
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Stock?: StockUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutThresholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Stock?: StockUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type ShipmentCreateManyCustomerInput = {
    id?: number
    shipment_date?: Date | string
    shipped_count: number
  }

  export type ShipmentUpdateWithoutCustomerInput = {
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_count?: IntFieldUpdateOperationsInput | number
  }

  export type StockCreateManySupplierInput = {
    id?: number
    count: number
  }

  export type StockUpdateWithoutSupplierInput = {
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}