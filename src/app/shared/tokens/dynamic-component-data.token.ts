import { InjectionToken } from "@angular/core";
import { ILandingBlockInfo } from "../interfaces";

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<ILandingBlockInfo>('dynamicComponentData')