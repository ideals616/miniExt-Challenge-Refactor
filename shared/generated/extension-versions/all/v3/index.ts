import { ExtensionType } from '../../../../extensions/sections';

// ------------------------ DO NOT EDIT ------------------------
// THIS FILE IS GENERATED BY A SCRIPT.
// TO GENERATE THIS FILE, RUN: yarn generate-types
// ------------------------ DO NOT EDIT ------------------------

export type v3FormFieldsMiniExtFieldWithConfig = {
    idOrName: { type: 'id'; id: string } | { type: 'name'; name: string };
};

export type v3AnyMiniExtFieldWithConfig = v3FormFieldsMiniExtFieldWithConfig;

// ------------------------ DO NOT EDIT ------------------------
// THIS FILE IS GENERATED BY A SCRIPT.
// TO GENERATE THIS FILE, RUN: yarn generate-types
// ------------------------ DO NOT EDIT ------------------------

export interface v3ExtensionConfigForm {
    type: ExtensionType.FORM;
    state: {
        tableId: string;
        formFields: v3FormFieldsMiniExtFieldWithConfig[];
    };
}

export type v3ExtensionConfig = v3ExtensionConfigForm;

export type v3ExtensionBaseType = v3ExtensionConfig & {
    version: 3;
    id: string;
    name: string;
    userUID: string;
    baseId: string;
};

export type v3SharableExtension = v3ExtensionBaseType;

export type v3Extension = v3SharableExtension;
