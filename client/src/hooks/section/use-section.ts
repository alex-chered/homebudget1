import { useCallback, useState } from 'react';

// store
import { useAppDispatch } from 'store';
import {
  generateGetAllAction,
  generateGetWithFilterAction,
  generateGetOneAction,
  generateCreateAction,
  generateUpdateAction,
  generateClearFilteredAction,
  generateClearCurrentAction,
  generateClearDataAction,
} from 'store/utils/generate-action';

// types
import { BaseModel } from 'types/models';
import { ActionRejectedError, IRejectedValue } from 'types/errors';

// settings
import { ISectionOptions } from 'settings/section';

// ==============================|| USE SECTION ||============================== //

export const useSection = <T extends BaseModel>(options: ISectionOptions) => {
  const dispatch = useAppDispatch();

  // save the options in the state
  const [innerOptions] = useState<ISectionOptions>({ ...options });

  //
  // GET ALL
  //
  // const getAll = useCallback(async (): Promise<T[]> => {
  //   const action = generateGetAllAction<T>(innerOptions);
  //   return dispatch(action())
  //     .unwrap()
  //     .catch((err: unknown) => {
  //       const message = (err as IRejectedValue).error;
  //       throw new ActionRejectedError(message);
  //     });
  // }, [dispatch, innerOptions]);
  const getAll = useCallback((): void => {
    const action = generateGetAllAction<T>(innerOptions);
    dispatch(action());
  }, [dispatch, innerOptions]);

  //
  // GET WITH FILTER
  //
  // const getWithFilter = useCallback(async (filter: string): Promise<T[]> => {
  //   const action = generateGetWithFilterAction<T>(innerOptions);
  //   return dispatch(action(filter))
  //     .unwrap()
  //     .catch((err: unknown) => {
  //       const message = (err as IRejectedValue).error;
  //       throw new ActionRejectedError(message);
  //     });
  // }, [dispatch, innerOptions]);
  const getWithFilter = useCallback((filter: string): void => {
    const action = generateGetWithFilterAction<T>(innerOptions);
    dispatch(action(filter));
  }, [dispatch, innerOptions]);

  //
  // GET ONE
  //
  // const getOne = useCallback(async (id: number | string): Promise<T> => {
  //   const action = generateGetOneAction<T>(innerOptions);
  //   return dispatch(action(id))
  //     .unwrap()
  //     .catch((err: unknown) => {
  //       const message = (err as IRejectedValue).error;
  //       throw new ActionRejectedError(message);
  //     });
  // }, [dispatch, innerOptions]);
  const getOne = useCallback((id: number | string): void => {
    const action = generateGetOneAction<T>(innerOptions);
    dispatch(action(id));
  }, [dispatch, innerOptions]);

  //
  // CREATE
  //
  const create = useCallback(async (param: T): Promise<T> => {
    const action = generateCreateAction<T>(innerOptions);
    return dispatch(action(param))
      .unwrap()
      .catch((err: unknown) => {
        const message = (err as IRejectedValue).error;
        throw new ActionRejectedError(message);
      });
  }, [dispatch, innerOptions]);

  //
  // UPDATE
  //
  const update = useCallback(async (param: T): Promise<T> => {
    const action = generateUpdateAction<T>(innerOptions);
    return dispatch(action(param))
      .unwrap()
      .catch((err: unknown) => {
        const message = (err as IRejectedValue).error;
        throw new ActionRejectedError(message);
      });
    // return dispatch(action(param)).unwrap();
  }, [dispatch, innerOptions]);

  //
  // CLEAR FILTERED
  //
  const clearFiltered = useCallback((): void => {
    const action = generateClearFilteredAction(innerOptions);
    dispatch(action());
  }, [dispatch, innerOptions]);

  //
  // CLEAR CURRENT
  //
  const clearCurrent = useCallback((): void => {
    const action = generateClearCurrentAction(innerOptions);
    dispatch(action());
  }, [dispatch, innerOptions]);

  //
  // CLEAR DATA
  //
  const clearData = useCallback((): void => {
    const action = generateClearDataAction(innerOptions);
    dispatch(action());
  }, [dispatch, innerOptions]);

  // RETURN
  return {
    getAll,
    getWithFilter,
    getOne,
    create,
    update,
    clearFiltered,
    clearCurrent,
    clearData,
  };
};
