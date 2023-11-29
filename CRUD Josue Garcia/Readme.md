1. Al descargar el proyecto del repositorio debes de crear la base de datos de MySql para que pueda        funcionar correctamente. 
    El codigo para la base de datos es el siguiente:

        CREATE DATABASE db_CRUD_JosueGarcia
        DEFAULT CHARACTER SET = 'utf8mb4';

        use db_CRUD_JosueGarcia

        CREATE TABLE MONEDA(
            idMoneda int AUTO_INCREMENT,
            nombre VARCHAR(50),
            venta DOUBLE(10,2),
            compra DOUBLE(10,2),
            PRIMARY KEY PK_idMoneda(idMoneda)
        );

    NOTA: si alguno de los siguientes datos son diferentes en tu computadora debes de cambiarlo en el archivo mysql.js, el cual se encuentra en la carpeta configs

        const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_CRUD_JosueGarcia"
        })

    NOTA: En caso de que ya le cambiaras los datos a los tu computadora y sigue saliendo error con la conexion a la base de datos, ejectura esta codigo sql en tu gestor de base de datos:     
    

2. Ejecutar en la terminas el siguiente comando (npm i), esto para descargar todos los paquetes y dependendias del proyecto.

3. Una vez se ejecute el comando anterior deberas de colocar el siguiente comando en la terminal: (npm run dev), en caso de no funcionar ese comando entonces ejecuta(node index.js). Y despues de eso el proyecto se levantara en el puerto 3200 de la computadora.

4. Ve a un navegador y coloca la siguiente linea en la ruta del navegador: http://localhost:3200/moneda/getAll.

5. Veras la pagina principal del proyecto y podras realizar todas las acciones del CRUD que desees.

6. Al momento de darle click al boton de agregar y no tienes seleccionado ningun dato, te mandara a una pagina indicandote del error, por ende esos campos no pueden ir vacios. En el campo de nombre acepta datos de tipo Text y en los campos de valor de compra y valor de venta los datos que acepta este programa son tipo decimal, si intentas enviar cantidad negativa te mandara un error.

7. Al momento de que guardes tu primer dato lo podras ver en pantalla junto con las opciones de eliminar y de actualizar.

8. Si le das clic en el boton actualizar te llevara a otra pagina en la que podras ingresar los cambios que quieras realizarle a ese campo. Las validaciones son las mismas que las de agregar(no se puede enviar vacio y no se pueden enviar numeros menores a 0)

9. Si le das clic al boton de eliminar, el registro al cual el diste clic se borrara permamentemente de la base de datos.

10. La ultima funcionalidad de este proyecto es el boton de API, el funcionamiento de ese boton es que consume una API y lo que hace es que en base a los valores de esa API crea un campo con los datos que contiene esa API. El unico campo que no se llena es el de nombre y eso se debe a que la API no nos da un nombre de moneda, asi que lo decidi dejar en blanco

