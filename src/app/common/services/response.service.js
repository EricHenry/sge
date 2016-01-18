/* @ngInject */
export default function ResponseService(){

  var Responses = {

    addResponse: function(httpCode, description){

      //this[httpCode] = new Response(description);
      this[httpCode] = Object.create(Response);
      this[httpCode].init(description);

    },

    /**
    */
    removeResponse: function(httpCode){

      this.responseList.forEach(function(resp, index, responseList){
        if(resp.hasOwnProperty(httpCode)){
          this.responseList.splice(index, 1);
          return;
        }
      });

    },

    /**
    */
    getResponse: function(httpCode){
      /*var response = null;

      this.responseList.forEach(function(resp, index, responseList){
        if(resp.hasOwnProperty(httpCode)){
          response = resp;
          return;
        }
      });

      return angular.copy(response);*/
      if(this.hasOwnProperty(httpCode))
        return this[httpCode];
      else
        return null;

    },

    /**
      Check to see if a response exists in the list
    */
    responseExists: function(httpCode){
      //var exists = false;

      //this.responseList.forEach(function(response, index, responseList){
      console.log("RESPONSE EXISTS FUNCTION");
      console.log(httpCode);
      console.log(this.responseList);
        if(this.hasOwnProperty(httpCode)){
          return true;
          //return;
        }else {
          return false;
        }
      //});

      //return exists;
    },

  };


  var Response = {
    init: function(descrip){
      this.description = descrip,
      this.schema = new Object(),
      this.headers = new Object(),
      this.examples = new Object()
    }
  }

    // /**
    //   Responses Object
    // */
    // function Responses(){
    //
    //   //this.responseList = new Object();
    //
    // }
    //
    // /**
    //   Responses function
    // */
    // Responses.prototype = {
    //   /**
    //
    //   */
    //   addResponse: function(httpCode, description){
    //     console.log(this.responseList);
    //
    //     this[httpCode] = new Response(description);
    //
    //     console.log(this.responseList);
    //
    //
    //   },
    //
    //   /**
    //   */
    //   removeResponse: function(httpCode){
    //
    //     this.responseList.forEach(function(resp, index, responseList){
    //       if(resp.hasOwnProperty(httpCode)){
    //         this.responseList.splice(index, 1);
    //         return;
    //       }
    //     });
    //
    //   },
    //
    //   /**
    //   */
    //   getResponse: function(httpCode){
    //     /*var response = null;
    //
    //     this.responseList.forEach(function(resp, index, responseList){
    //       if(resp.hasOwnProperty(httpCode)){
    //         response = resp;
    //         return;
    //       }
    //     });
    //
    //     return angular.copy(response);*/
    //     if(this.hasOwnProperty(httpCode))
    //       return this[httpCode];
    //     else
    //       return null;
    //
    //   },
    //
    //   /**
    //     Check to see if a response exists in the list
    //   */
    //   responseExists: function(httpCode){
    //     //var exists = false;
    //
    //     //this.responseList.forEach(function(response, index, responseList){
    //     console.log("RESPONSE EXISTS FUNCTION");
    //     console.log(httpCode);
    //     console.log(this.responseList);
    //       if(this.hasOwnProperty(httpCode)){
    //         return true;
    //         //return;
    //       }else {
    //         return false;
    //       }
    //     //});
    //
    //     //return exists;
    //   },
    //
    // };
    //
    // /**
    //   Response Object
    // */
    // function Response(descrip){
    //
    //
    //
    //   //return this[httpCode];
    // }



    return {
      newResponses:function(){
         return Object.create(Responses);
        //return new Responses();
      },

      newResponse: function(httpCode, description){
        var response = null;
        var temp = null

        if(!httpCode)
          throw "To create a response code please pass a http code status"
        else if(!description)
          throw "A description is required to create a response"
        else
          return new Response(httpCode, description);

          //response = temp[httpCode];

          //return response;

      },
      hasResponse: function(pathName, operation, httpCode){

      }
    }

}
