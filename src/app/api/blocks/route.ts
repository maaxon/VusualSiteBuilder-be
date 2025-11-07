import { NextResponse } from 'next/server';
import config from '@payload-config';
import {getPayload} from "payload";

export const GET = async () => {
    const req = await getPayload({config});
    const blocks = req.config.blocks?.map(({fields,slug}) => ({slug,fields}))

    return NextResponse.json(blocks);
};
