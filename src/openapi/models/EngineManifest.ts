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
import type { LicenseInfo } from './LicenseInfo';
import {
    LicenseInfoFromJSON,
    LicenseInfoFromJSONTyped,
    LicenseInfoToJSON,
} from './LicenseInfo';
import type { SupportedFeatures } from './SupportedFeatures';
import {
    SupportedFeaturesFromJSON,
    SupportedFeaturesFromJSONTyped,
    SupportedFeaturesToJSON,
} from './SupportedFeatures';
import type { UpdateInfo } from './UpdateInfo';
import {
    UpdateInfoFromJSON,
    UpdateInfoFromJSONTyped,
    UpdateInfoToJSON,
} from './UpdateInfo';

/**
 * エンジン自体に関する情報。
 * @export
 * @interface EngineManifest
 */
export interface EngineManifest {
    /**
     * マニフェストのバージョン
     * @type {string}
     * @memberof EngineManifest
     */
    manifestVersion: string;
    /**
     * エンジン名
     * @type {string}
     * @memberof EngineManifest
     */
    name: string;
    /**
     * ブランド名
     * @type {string}
     * @memberof EngineManifest
     */
    brandName: string;
    /**
     * エンジンのUUID
     * @type {string}
     * @memberof EngineManifest
     */
    uuid: string;
    /**
     * エンジンのURL
     * @type {string}
     * @memberof EngineManifest
     */
    url: string;
    /**
     * エンジンのアイコンをBASE64エンコードしたもの
     * @type {string}
     * @memberof EngineManifest
     */
    icon: string;
    /**
     * デフォルトのサンプリング周波数
     * @type {number}
     * @memberof EngineManifest
     */
    defaultSamplingRate: number;
    /**
     * エンジンのフレームレート
     * @type {number}
     * @memberof EngineManifest
     */
    frameRate: number;
    /**
     * エンジンの利用規約
     * @type {string}
     * @memberof EngineManifest
     */
    termsOfService: string;
    /**
     * エンジンのアップデート情報
     * @type {Array<UpdateInfo>}
     * @memberof EngineManifest
     */
    updateInfos: Array<UpdateInfo>;
    /**
     * 依存関係のライセンス情報
     * @type {Array<LicenseInfo>}
     * @memberof EngineManifest
     */
    dependencyLicenses: Array<LicenseInfo>;
    /**
     * エンジンが対応するvvlibのバージョン
     * @type {string}
     * @memberof EngineManifest
     */
    supportedVvlibManifestVersion?: string;
    /**
     * エンジンが持つ機能
     * @type {SupportedFeatures}
     * @memberof EngineManifest
     */
    supportedFeatures: SupportedFeatures;
}

/**
 * Check if a given object implements the EngineManifest interface.
 */
export function instanceOfEngineManifest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "manifestVersion" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "brandName" in value;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "defaultSamplingRate" in value;
    isInstance = isInstance && "frameRate" in value;
    isInstance = isInstance && "termsOfService" in value;
    isInstance = isInstance && "updateInfos" in value;
    isInstance = isInstance && "dependencyLicenses" in value;
    isInstance = isInstance && "supportedFeatures" in value;

    return isInstance;
}

export function EngineManifestFromJSON(json: any): EngineManifest {
    return EngineManifestFromJSONTyped(json, false);
}

export function EngineManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EngineManifest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manifestVersion': json['manifest_version'],
        'name': json['name'],
        'brandName': json['brand_name'],
        'uuid': json['uuid'],
        'url': json['url'],
        'icon': json['icon'],
        'defaultSamplingRate': json['default_sampling_rate'],
        'frameRate': json['frame_rate'],
        'termsOfService': json['terms_of_service'],
        'updateInfos': ((json['update_infos'] as Array<any>).map(UpdateInfoFromJSON)),
        'dependencyLicenses': ((json['dependency_licenses'] as Array<any>).map(LicenseInfoFromJSON)),
        'supportedVvlibManifestVersion': !exists(json, 'supported_vvlib_manifest_version') ? undefined : json['supported_vvlib_manifest_version'],
        'supportedFeatures': SupportedFeaturesFromJSON(json['supported_features']),
    };
}

export function EngineManifestToJSON(value?: EngineManifest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manifest_version': value.manifestVersion,
        'name': value.name,
        'brand_name': value.brandName,
        'uuid': value.uuid,
        'url': value.url,
        'icon': value.icon,
        'default_sampling_rate': value.defaultSamplingRate,
        'frame_rate': value.frameRate,
        'terms_of_service': value.termsOfService,
        'update_infos': ((value.updateInfos as Array<any>).map(UpdateInfoToJSON)),
        'dependency_licenses': ((value.dependencyLicenses as Array<any>).map(LicenseInfoToJSON)),
        'supported_vvlib_manifest_version': value.supportedVvlibManifestVersion,
        'supported_features': SupportedFeaturesToJSON(value.supportedFeatures),
    };
}

