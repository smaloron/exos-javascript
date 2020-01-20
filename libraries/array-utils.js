//fonction de déduplication
        function deduplication(sourceArray) {
            //Suppression des doublons
            var item, posFound;
            var newArray = [];

            for (let index in sourceArray) {
                item = sourceArray[index];
                posFound = sourceArray.indexOf(item);

                if (posFound == index) {
                    newArray.push(item);
                }
            }

            return newArray;
        }

        // fonction d'affichage d'un tableau ordinal sous forme de liste html
        function getHtmlList(sourceArray) {
            var html = "<ul>";
            for (let item of sourceArray) {
                html += `<li>${item}</li>`;
            }
            html += "</ul>";

            return html;
        }

        /*
        * fonction retournant le code html d'une case de tableau HTML
        * paramètres : la valeur à insérer dans la case
        *            : estEnTete un boolean indiquant si la case est une case d'en-tête
        */
       function obtenirCaseHtml(valeur, estEnTete){

        //console.log(typeof valeur);
        if(Array.isArray(valeur)){
            valeur = valeur.join("<br>");
        }
        if(estEnTete){
            return `<th> ${valeur} </th>`;
        } else {
            return `<td> ${valeur} </td>`;
        } 
    }

    /*
    * fonction retournant le code html d'une ligne de tableau HTML
    * paramètre : l'objet contenant les données de la ligne 
    */
    function obtenirLigneHtml(objet){
        let html = "<tr>";
        for(clef in objet){
            html += obtenirCaseHtml(objet[clef]);
        }
        html += "</tr>";

        return html;
    }
    /**
     * fonction retournant le code html de l'en tête d'un tableau
     * paramètre : un objet contenant des clefs qui correspondent aux en têtes
     */
    function obtenirEnTeteHtml(objet){
        let html = "<tr>";
        for(clef in objet){
            html += obtenirCaseHtml(clef, true);
        }
        html += "</tr>";

        return html;
    }

    /**
     * fonction retournant le code html d'un tableau
     * paramètre : un tableau ordinal d'objets
     */ 
    function obtenirTableHtml(data){
        let html = "<table>";

        if(data.length >0){
            html += obtenirEnTeteHtml(data[0]);
        }
        
        for(ligne of data){
            html += obtenirLigneHtml(ligne);
        }

        html += "</table>";

        return html;
    }