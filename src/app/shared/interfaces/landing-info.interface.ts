import { Injector } from "@angular/core";
import { LandingBlocks, Reasons } from "../enum";

export interface ILandingInfo { 
	[key: string]: ILandingBlocksInfo
}

export type ILandingBlocksInfo = Array<ILandingBlockInfo>;

export interface ILandingBlockInfo {
    tag: LandingBlocks;
    title?: string;
    img?: string;
    description?: string;
    isImgRight?: boolean;
    isAdditionalPadding?: boolean;
    bgImg?: string;
    blocks?: Array<{
        img: string;
        title: string;
        description: string;
    }>;
    isSources?: boolean,
    formType?: Reasons,
	injector?: Injector,
    showMoreLink?: string, 
}