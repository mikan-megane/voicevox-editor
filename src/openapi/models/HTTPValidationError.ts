/* tslint:disable */
/* eslint-disable */
/**
 * VOICEVOX ENGINE OSS
 * VOICEVOX OSS の音声合成エンジンです。
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ValidationError } from './ValidationError';
import {
    ValidationErrorFromJSON,
    ValidationErrorFromJSONTyped,
    ValidationErrorToJSON,
} from './ValidationError';

/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}

/**
 * Check if a given object implements the HTTPValidationError interface.
 */
export function instanceOfHTTPValidationError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HTTPValidationErrorFromJSON(json: any): HTTPValidationError {
    return HTTPValidationErrorFromJSONTyped(json, false);
}

export function HTTPValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): HTTPValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : ((json['detail'] as Array<any>).map(ValidationErrorFromJSON)),
    };
}

export function HTTPValidationErrorToJSON(value?: HTTPValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail === undefined ? undefined : ((value.detail as Array<any>).map(ValidationErrorToJSON)),
    };
}

