import {StackScreenProps} from '@react-navigation/stack'
export type RootStackParams = {
    ClientsScreen: {text:String}
    CoastScreen: {text:String}
    TotalScreen: {text:String}
    AddNewClientScreen: {text:String}
    ProfileClientScreen: {id:String, name:String, Telephone:String}
    ProceduresScreen: {text:String}
    AddNewProcedureScreen: {text:String}
    ClientsScreenStack: {text:String}
    ProceduresScreenStack: {text: String}
}

export type PropsClientsScreen = StackScreenProps<RootStackParams, 'ClientsScreenStack'>;
export type PropsProceduresScreen = StackScreenProps<RootStackParams, 'ProceduresScreenStack'>;