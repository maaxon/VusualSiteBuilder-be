import { NextResponse } from 'next/server';
import config from '@payload-config';
import {getPayload} from "payload";

export const GET = async () => {
    const req = await getPayload({config});
    const collections = req.config.collections.map(({fields,slug}) => ({slug,fields})).find(col => col.slug === 'pages')

    return NextResponse.json(collections);
};
