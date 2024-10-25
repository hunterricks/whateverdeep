// File: /Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/api/auth/[...auth0]/route.ts
import { GET } from '../../../../../../app/api/auth/[...auth0]/route.js'
import type { NextRequest } from 'next/server.js'
import * as React from 'react'

type TEntry = {
  GET: (req: NextRequest, context: { params: { auth0: string[] } }) => Response | Promise<Response>
  // Add other methods and properties as needed
}

const entry: TEntry = {
  GET,
  // Add other methods and properties as needed
};

// Check that the entry is a valid entry
checkFields<Diff<{
  GET?: (req: NextRequest, context: { params: { auth0: string[] } }) => Response | Promise<Response>
  HEAD?: (req: NextRequest) => Response | Promise<Response>
  OPTIONS?: (req: NextRequest) => Response | Promise<Response>
  POST?: (req: NextRequest) => Response | Promise<Response>
  PUT?: (req: NextRequest) => Response | Promise<Response>
  DELETE?: (req: NextRequest) => Response | Promise<Response>
  PATCH?: (req: NextRequest) => Response | Promise<Response>
  config?: Record<string, never>
  generateStaticParams?: (params: PageParams) => any[] | Promise<any[]>
  revalidate?: RevalidateRange<TEntry> | false
  dynamic?: 'auto' | 'force-dynamic' | 'error' | 'force-static'
  dynamicParams?: boolean
  fetchCache?: 'auto' | 'force-no-store' | 'only-no-store' | 'default-no-store' | 'default-cache' | 'only-cache' | 'force-cache'
  preferredRegion?: 'auto' | 'global' | 'home' | string | string[]
  runtime?: 'nodejs' | 'experimental-edge' | 'edge'
  maxDuration?: number
  
}, TEntry, ''>>()

// Check the prop type of the entry function
if ('GET' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'GET'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'GET'>>
      },
      'GET'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'GET'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'GET'>>
      },
      'GET'
    >
  >()
  
  checkFields<
    Diff<
      {
        __tag__: 'GET',
        __return_type__: Response | never | Promise<Response | never>
      },
      {
        __tag__: 'GET',
        __return_type__: ReturnType<MaybeField<TEntry, 'GET'>>
      },
      'GET'
    >
  >()
}
// Check the prop type of the entry function
if ('HEAD' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'HEAD'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'HEAD'>>
      },
      'HEAD'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'HEAD'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'HEAD'>>
      },
      'HEAD'
    >
  >()

  checkFields<
    Diff<
      {
        __tag__: 'HEAD',
        __return_type__: Response | undefined | never | Promise<Response | undefined | never>
      },
      {
        __tag__: 'HEAD',
        __return_type__: ReturnType<MaybeField<TEntry, 'HEAD'>>
      },
      'HEAD'
    >
  >()
}
// Check the prop type of the entry function
if ('OPTIONS' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'OPTIONS'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'OPTIONS'>>
      },
      'OPTIONS'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'OPTIONS'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'OPTIONS'>>
      },
      'OPTIONS'
    >
  >()

  checkFields<
    Diff<
      {
        __tag__: 'OPTIONS',
        __return_type__: Response | undefined | never | Promise<Response | undefined | never>
      },
      {
        __tag__: 'OPTIONS',
        __return_type__: ReturnType<MaybeField<TEntry, 'OPTIONS'>>
      },
      'OPTIONS'
    >
  >()
}
// Check the prop type of the entry function
if ('POST' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'POST'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'POST'>>
      },
      'POST'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'POST'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'POST'>>
      },
      'POST'
    >
  >()

  checkFields<
    Diff<
      {
        __tag__: 'POST',
        __return_type__: Response | Promise<Response>
      },
      {
        __tag__: 'POST',
        __return_type__: ReturnType<MaybeField<TEntry, 'POST'>>
      },
      'POST'
    >
  >()
}
// Check the prop type of the entry function
if ('PUT' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'PUT'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'PUT'>>
      },
      'PUT'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'PUT'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'PUT'>>
      },
      'PUT'
    >
  >()

  checkFields<
    Diff<
      {
        __tag__: 'PUT',
        __return_type__: Response | undefined | never | Promise<Response | undefined | never>
      },
      {
        __tag__: 'PUT',
        __return_type__: ReturnType<MaybeField<TEntry, 'PUT'>>
      },
      'PUT'
    >
  >()
}
// Check the prop type of the entry function
if ('DELETE' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'DELETE'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'DELETE'>>
      },
      'DELETE'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'DELETE'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'DELETE'>>
      },
      'DELETE'
    >
  >()

  checkFields<
    Diff<
      {
        __tag__: 'DELETE',
        __return_type__: Response | undefined | never | Promise<Response | undefined | never>
      },
      {
        __tag__: 'DELETE',
        __return_type__: ReturnType<MaybeField<TEntry, 'DELETE'>>
      },
      'DELETE'
    >
  >()
}
// Check the prop type of the entry function
if ('PATCH' in entry) {
  checkFields<
    Diff<
      ParamCheck<Request | NextRequest>,
      {
        __tag__: 'PATCH'
        __param_position__: 'first'
        __param_type__: FirstArg<MaybeField<TEntry, 'PATCH'>>
      },
      'PATCH'
    >
  >()
  checkFields<
    Diff<
      ParamCheck<PageParams>,
      {
        __tag__: 'PATCH'
        __param_position__: 'second'
        __param_type__: SecondArg<MaybeField<TEntry, 'PATCH'>>
      },
      'PATCH'
    >
  >()

  checkFields<
    Diff<
      {
        __tag__: 'PATCH',
        __return_type__: Response | undefined | never | Promise<Response | undefined | never>
      },
      {
        __tag__: 'PATCH',
        __return_type__: ReturnType<MaybeField<TEntry, 'PATCH'>>
      },
      'PATCH'
    >
  >()
}

// Check the arguments and return type of the generateStaticParams function
if ('generateStaticParams' in entry) {
  checkFields<Diff<{ params: PageParams }, FirstArg<MaybeField<TEntry, 'generateStaticParams'>>, 'generateStaticParams'>>()
  checkFields<Diff<{ __tag__: 'generateStaticParams', __return_type__: unknown[] | Promise<unknown[]> }, { __tag__: 'generateStaticParams', __return_type__: ReturnType<MaybeField<TEntry, 'generateStaticParams'>> }>>()
}

type PageParams = unknown
export interface PageProps {
  params?: Record<string, unknown>
  searchParams?: Record<string, unknown>
}
export interface LayoutProps {
  children?: React.ReactNode

  params?: unknown
}

// =============
// Utility types
type RevalidateRange<T> = T extends { revalidate: Numeric } ? NonNegative<T['revalidate']> : never

// If T is unknown or any, it will be an empty {} type. Otherwise, it will be the same as Omit<T, keyof Base>.
type OmitWithTag<T, K extends string, _M> = Omit<T, K>
type Diff<Base, T extends Base, Message extends string = ''> = 0 extends (1 & T) ? NonNullable<unknown> : OmitWithTag<T, keyof Base & string, Message>

type FirstArg<T> = T extends (arg1: infer U, ...args: unknown[]) => unknown ? U : never
type SecondArg<T extends (...args: any[]) => unknown> = T extends (arg1: any, arg2: infer U, ...args: any[]) => unknown ? U : never
type MaybeField<T, K extends string> = T extends { [k in K]: infer G } ? G extends (...args: any[]) => any ? G : never : never

type ParamCheck<T> = {
  __tag__: string
  __param_position__: string
  __param_type__: T
}

function checkFields<_ extends { [k in keyof any]: never }>() {}

// https://github.com/sindresorhus/type-fest
type Numeric = number | bigint
type Zero = 0 | 0n
type Negative<T extends Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never
type NonNegative<T extends Numeric> = T extends Zero ? T : Negative<T> extends never ? T : '__invalid_negative_number__'
