/* Firebase Marevya — projeto banheira-spa */
(function(){
  const firebaseConfig={
    apiKey:'AIzaSyAnrhE8NtqXtUbi3t3yfwEvvuy_1_-FAjM',
    authDomain:'banheira-spa.firebaseapp.com',
    projectId:'banheira-spa',
    storageBucket:'banheira-spa.firebasestorage.app',
    messagingSenderId:'61752269525',
    appId:'1:61752269525:web:22d4e247928c9074ef605c',
    measurementId:'G-KEFQYRPTLQ'
  };
  window.MarevyaFirebaseConfig=firebaseConfig;
  window.MarevyaFirebaseReady=(async()=>{
    if(!window.firebase) throw new Error('Firebase SDK não carregou.');
    if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    const auth=firebase.auth();
    const db=firebase.firestore();
    try{await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)}catch(e){console.warn('Persistência:',e)}
    window.marevyaAuth=auth;
    window.marevyaDB=db;
    return {auth,db};
  })();
})();
