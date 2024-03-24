import { Injector } from "@angular/core";
import { ILandingBlockInfo } from "../interfaces";
import { DYNAMIC_COMPONENT_DATA } from "../tokens";
import { getFullImgPath } from "./img-path.helper";

export abstract class CommonLandingComponentClass {
	public data: ILandingBlockInfo;

	constructor(
		private readonly injector: Injector
	) {
		this.data = this.injector.get(DYNAMIC_COMPONENT_DATA);
	}

	public get imgPath(): string | undefined {
		return getFullImgPath(this.data?.img ?? ''); 
	};

	public get bgImgPath(): string | undefined {
		return getFullImgPath(this.data?.bgImg ?? ''); 
	};

	public getImgPath = (img: string): string => getFullImgPath(img);
}