import axios, { AxiosResponse } from "axios";
import Context from "../../context";
import * as Objects from "../../Interfaces";

interface JSON {
  content: Objects.Events[];
  message: string;
  status: number;
  error: boolean;
}

class Events {
  //? #region  GET Controller */
  /* Sobre esta função */ /**
    List all Events
     **/
  public async Get(): Promise<AxiosResponse<JSON>> {
    return await Context.get<Objects.Events[]>(`/Events`)
      .then((Response) => { return Response; })
      .catch((Exception) => { return Exception; });
  }
  //? #endregion */

  //* #region  POST Controller  */
  //* #endregion */

  //TODO #region PUT Controller  */
  //TODO #endregion */
}

export default new Events();
