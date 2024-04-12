import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type FormGroupDef<T> = {
    [K in keyof T]: T[K] extends Array<infer R>
        ? FormArray<
              R extends Record<any, any>
                  ? FormGroup<FormGroupDef<R>>
                  : FormControl<R>
          >
        : T[K] extends Record<any, any>
        ? FormGroup<FormGroupDef<T[K]>>
        : FormControl<T[K]>;
};