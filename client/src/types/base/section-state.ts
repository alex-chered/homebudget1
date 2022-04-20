// types
import { BaseModel } from 'types/models';

// ==============================|| SECTION STATE ||============================== //

export interface ISectionState<T extends BaseModel> {
  data: T[];
  filtered: T[];
  current: T | null;

  loading: boolean;
  errorText: string;
}
