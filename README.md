<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>025_node_jwt_oauth2</h1>
	</div>
</div>

&nbsp;

# Table of contents

---

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technologies used](#technologies-used)
- [References](#references)
- [Steps](#steps)

  - <details> <summary>List of Steps</summary>

    - [Install & Setup Vite + React + Bootstrap 5](#-artificial-intelligence-and-bots)

   </details>

[⏪(Back to top)](#table-of-contents)

# Project Description

**025_node_jwt_oauth2** is a practice to build a **Nodejs y mysql, app completa (login, registro)- #1** Nodejs following Youtube DOMINICODE's tutorial [Nodejs y mysql, app completa (login, registro)](https://www.youtube.com/watch?v=hYv6BM2fWd8) and the other help that you can find into **Reference** section.

[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

---

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

[⏪(Back to top)](#table-of-contents)

# References

---

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

[⏪(Back to top)](#table-of-contents)

# Steps

- Build project scafolding wiht **typeorm**

  ```bash
    npx typeorm init --name login_roles --database mysql --express
  ```

- Add dependencies

  ```bash
    npm i cors jsonwebtoken bcryptjs class-validator helmet
  ```

  ```bash
    npm i -D ts-node-dev typescript @types/bcryptjs @types/cors @types/jsonwebtoken @types/express @types/node
  ```

- Add MySql on the cloud

- MySql en la nube
  - [PlanetScale - Hosting de MySQL Gratuito y Fácil](https://www.youtube.com/watch?v=XEY-7tKkPik)
    - [Oficial de PlanetScale](https://planetscale.com/)
- Error:

  - ts-node-dev: no script to run provided

    ```bash
    "scripts": {
    	"tsc": "tsc",
    	"dev": "set debug=* && ts-node-dev --respawn --transpile-only ./src/index.ts"
    }
    ```

  - server does not allow insecure connections, client must use SSL/TLS

    - https://stackoverflow.com/questions/56660312/cannot-connect-an-ssl-secured-database-to-typeorm
    - To avoid in development enviroment just add to **data-source.ts**

    ```bash
    ssl: {
    	rejectUnauthorized: false,
    }
    ```

[⏪(Back to top)](#table-of-contents)
