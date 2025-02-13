import * as $runtime from "../runtime/library"

/**
 */
export const getDailyUserGrowth: () => $runtime.TypedSql<getDailyUserGrowth.Parameters, getDailyUserGrowth.Result>

export namespace getDailyUserGrowth {
  export type Parameters = []
  export type Result = {
    day: Date | null
    dayTimestamp: number | null
    user_count: bigint
  }
}
