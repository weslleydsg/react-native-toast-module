import { NativeModules } from 'react-native';

type ToastModuleType = {
  show(message: string): Promise<void>;
};

const { ToastModule } = NativeModules;

export default ToastModule as ToastModuleType;
