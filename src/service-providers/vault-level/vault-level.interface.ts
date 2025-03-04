// dirinfo

import {
  IBaseDatasetDescriptor,
  IRecordDescriptor,
} from 'service-providers/common/common.interface'

export interface IDirInfoDatasetDescriptor extends IBaseDatasetDescriptor {
  secondary?: string[]
}

export interface IDocumentation {
  id: string
  title: string
  url: string
}

export interface IDirInfo {
  version: string
  dsList: string[]
  dsDict: Record<string, IDirInfoDatasetDescriptor>
  documentation: IDocumentation[]
}

// single_cnt

export interface ISingleCntArgument {
  record: string
}

// job_status

export interface IJobStatusArgument {
  task: string
}

export interface IJobStatusSamples {
  samples: IRecordDescriptor[]
}

export interface IJobStatusRecords {
  records: IRecordDescriptor[]
}

export type TTaskResult = IJobStatusSamples | IJobStatusRecords

export type TJobStatus =
  | null
  | [falseOrResult: false | TTaskResult, taskStatus: string]

// adm_update

export type TAdmUpdateResponse = 'Updated'

// adm_reload_ds
interface IAdmDsQuery {
  ds: string
}
export interface IAdmReloadDsArguments extends IAdmDsQuery {}

// adm_drop_ds

export interface IAdmDropDsArguments extends IAdmDsQuery {}
