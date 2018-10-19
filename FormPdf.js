function print () {
    w = open ("",'print', 'width=1000,height=1000, toolbar=no, scrollbars= no, resizable= yes');
    w.document.write ("<body>");
    w.document.write ("Nom : ");
    w.document.write (document.getElementById("Nom").value);
    w.document.write ("<br>");
    w.document.write ("Prenom : ");
    w.document.write (document.getElementById("Prenom").value);
    w.document.write ("<br>");
    w.document.write ("Date de Naissance : ");
    w.document.write (document.getElementById("DateNais").value);
    w.document.write ("</body>");
    w.document.close();
    w.print();
}