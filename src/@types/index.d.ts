declare interface IRoute {
  label?: string;
  icon?: string;
  path: string;
  component: React.FunctionComponent | React.Components;
  hide?: boolean;
  private?: boolean;
  name: string;
}

declare interface IField {
  name: string;
  label: string;
  type?: "text" | "password" | "option" | "image" | "date";
  validations?: string[];
  optionData?: IOptionData;
  hide?: boolean;
}

declare interface IOptionData {
  data: any[];
  textKey: string;
  valueKey: string;
}

declare interface IAppContext {
  token: string;
  username: string;
  login: (token: string, username: string, callback: () => void) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

declare interface IPemohon {
  _id: string;
  username: string;
  email: string;
  password: string;
  fullname: string;
  date: string;
  gender: string;
  nationaly: string;
  address: string;
  education: string;
}

declare interface IPekerjaan {
  _id: string;
  username: string;
  lembaga: string;
  alamat: string;
  telepon: string;
  email: string;
  kodepos: string;
  fax: string;
}

declare interface ILogin {
  token?: string;
  username?: string;
}

declare interface IAsesmen {
  _id: string;
  judul_elemen: string;
  kode_unit: string;
  judul_unit: string;
  penilaian: string;
  bukti: string;
}
