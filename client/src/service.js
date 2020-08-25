var villagerData = null;

async function villagerCall(){
  //this fetch is actuall made to localhost:3000 (the web pack dev server)
  // but then it is proxied to localhost:5000
  //IMPORTANT: having callBackend() as a async function so that we can properly
  // feth data first, before we try to manipulate it
  const response = await fetch('/villagers');
  const body = response.json();
  
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}

async function clothingCall(){
   const response = await fetch('http://acnhapi.com/v1/wallmounted/');
   const body = response.json();

   if(response.status !== 200){
      throw Error(body.message);
   }

   return body;
}


export {villagerCall,clothingCall, villagerData};