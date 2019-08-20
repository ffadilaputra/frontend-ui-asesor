import { api } from "../config"
import { ServiceGenerator } from "./ServiceGenerator"

export class PekerjaanService extends ServiceGenerator<IPekerjaan> {
  protected endpoint = api.endpoint + "pekerjaan"
}
