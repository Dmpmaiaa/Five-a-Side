###### GESTÃO DE CAMPOS

  
### GET *'api/campos'* --> todos os campos

          success = {
                        estado : 200,
                        json() : [{campos}]
                    }

            error = {
                        estado : 404,
                        json() : {errorMessage : 'not_found'}
                    }


### GET *'api/campos/:id'* --> detalhes de campo específico

            success={
                        estado : 200,
                        json() : campo{}
                    }

            error = {
                        estado : 404,
                        json() : {errorMessage : 'not_found'}
                    }


---

###### PESQUISA DE JOGOS


### GET *'api/jogos/'* --> Todos os jogos para este dia


            success={
                        estado : 200,
                        json() : [{jogos do dia atual}]
                    }


            error = {
                        estado : 404,
                        json() : {errorMessage : 'not_found'}
                    }


### GET *'api/jogos/:id'* --> Procura por jogo especifico


            success={
                        estado : 200,
                        json() : jogo {}
                    }

            error = {
                        estado : 404,
                        json() : {errorMessage : 'no_game'}
                    }

### GET *'api/jogos/?date=:date'* --> Procurar jogos por datas

            success={
                        estado : 200,
                        json() : [jogo{}]
                    }

            error = {
                        estado : 404,
                        json() : {errorMessage : 'no_game'}
                    }


### GET *'api/jogos/?campo=:campo'* --> Procurar jogos por campos

            success={
                        estado : 200,
                        json() : [jogos{}]
                    }


            error = {
                        estado : 404,
                        json() : {errorMessage : 'no_game'}
                    }




###### MARCAÇÃO DE JOGOS #########

### POST *'/api/jogos/'* -->  Cria um jogo mediante disponibilidade

            success={
                        estado : 201
                        
                    }


            error = {
                        estado : 400,
                        json() : {errorMessage : 'AINDA NAO SEI'}
                    }


---

###### INSCRIÇÃO NOS JOGOS

### POST *'/api/jogos/:id'* --> Inscrever-se nos jogos

            success={
                        estado : 200
                    }


            error = {
                        estado : 400,
                        json() : {errorMessage : 'AINDA NAO SEI'}
                    }                

---

###### PÁGINA DE PERFIL #####

### GET *'/api/users/:id'* --> Informaçao user p/ pagina perfil

            success={
                        estado : 200,
                        json() : user{}
                    }


            error = {
                        estado : 404,
                        json() : {errorMessage : 'not_found'}
                    }     