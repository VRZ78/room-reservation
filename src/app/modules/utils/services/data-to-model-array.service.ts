export class DataToModelArrayService {

  /**
   * Transform a raw JS array to an array of the given class
   * @param data
   * @param model
   */
  static getModelArrayFromData = function (data : [] = [], model : any = Object) {

    let modelArray  = [];

    for(let i = 0; i < data.length; i++) {
      modelArray.push(new model(data[i]));
    }

    return modelArray

  }

}
