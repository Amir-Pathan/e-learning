import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { getDocs,doc,updateDoc } from "firebase/firestore";

const services={

  getData:(colc)=>{

    return new Promise((resolve,reject)=>{

      let q = query(collection(db,colc))

      getDocs(q).then((res)=>{

        const data = []

        res.forEach((i)=>{

            let allData = i.data()

            allData.id=i.id;

            data.push(allData)

        })

        resolve(data)

    }).catch((err)=>{

        reject(err)

    })


    })

  },

  getByField:(colc,field,value)=>{

    return new Promise((resolve,reject)=>{

      let q = query(collection(db,colc),where(field,'==',value))

      getDocs(q).then((res)=>{

        console.log(res.docs);


        res.docs.forEach((i)=>{

          let allData=i.data()

           allData.id=i.id

          localStorage.setItem('user',JSON.stringify(allData))

      })

      resolve(true)

      }).catch((err)=>{

        reject(false)
  
      })

    })

  },

  upDateData:(colc,id,dc)=>{

    console.log(colc,id,dc);

    return new Promise((resolve,reject)=>{


      const docRef = doc(db,colc,id)

      updateDoc(docRef,dc).then((res)=>{

        
        resolve(res)

      }).catch((err)=>{
      
       reject(err)

      })

    })

  }

}

export default services