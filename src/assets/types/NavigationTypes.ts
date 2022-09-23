import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ICleint } from './ClientsTypes';

export type RootStackParams = {
    AddNewClientScreen: undefined
    ProfileClientScreen: {client: ICleint}
    AddNewProcedureScreen: undefined
    ClientsScreenStack: undefined
    ProceduresScreenStack: undefined
}

export type RootTabParams = {
    Клиенты: undefined
    Процедуры: undefined
    Расходы: undefined
    Итог: undefined
}

export type AddNewClientScreenProp = NativeStackScreenProps<RootStackParams, 'AddNewClientScreen'>;
export type ProfileClientScreenProp = NativeStackScreenProps<RootStackParams, 'ProfileClientScreen'>;
export type AddNewProcedureScreenProp = NativeStackScreenProps<RootStackParams, 'AddNewProcedureScreen'>;
export type ClientsScreenStackProp = NativeStackScreenProps<RootStackParams, 'ClientsScreenStack'>;
export type ProceduresScreenStack = NativeStackScreenProps<RootStackParams, 'ProceduresScreenStack'>;


export type ClientsScreenProp = CompositeScreenProps<
  BottomTabScreenProps<RootTabParams, 'Клиенты'>,
  StackScreenProps<RootStackParams>
>;
export type ProceduresScreenProp = CompositeScreenProps<
  BottomTabScreenProps<RootTabParams, 'Процедуры'>,
  StackScreenProps<RootStackParams>
>;
export type CoastScreenProp = CompositeScreenProps<
  BottomTabScreenProps<RootTabParams, 'Расходы'>,
  StackScreenProps<RootStackParams>
>;
export type TotalScreenProp = CompositeScreenProps<
  BottomTabScreenProps<RootTabParams, 'Итог'>,
  StackScreenProps<RootStackParams>
>;