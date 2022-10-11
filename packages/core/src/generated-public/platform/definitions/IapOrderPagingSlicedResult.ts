/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapOrderInfo } from './IapOrderInfo'
import { Paging } from './Paging'

export const IapOrderPagingSlicedResult = z.object({ data: z.array(IapOrderInfo), paging: Paging.nullish() })

export type IapOrderPagingSlicedResult = z.TypeOf<typeof IapOrderPagingSlicedResult>
