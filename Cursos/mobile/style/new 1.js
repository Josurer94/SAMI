 public class Documento extends HttpServlet {

        //invoked from doGet method to create PDF through servlet
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ClassNotFoundException, SQLException  {
        //Set content type to application / pdf
        //browser will open the document only if this is set
        response.setContentType("application/pdf");
        //Get the output stream for writing PDF object
        OutputStream out=response.getOutputStream();
        try {
            
            float[] Width = {15f,15f,15f,10f,15f,15f,10f,15f};
            String valores = request.getParameter("pdf");
            char c = valores.charAt(0);
             
            //Obtencion de curp para seleccionar tablas
            Object datocurp = request.getParameter("datocurp");
            //inicia lo de bd
     
            Class.forName("com.mysql.jdbc.Driver");
            //obtenemos la conexiónConnection
            String bd = "ServicioMedico";
            String login = "root";
            String password = "Nera1212fe*";
            String url = "jdbc:mysql://localhost/"+bd;
            Connection conn = null;
            conn = DriverManager.getConnection(url,login,password);
            Statement s = conn.createStatement(),s2 = conn.createStatement(),s3 = conn.createStatement();
            ResultSet rs = null , rs2 = null,r3 = null;
    */        //fin de coneccion
            //creacion de variables globales
            int i = 0;
            int j = 0;
            String dato,imprime,imprime2,dato2,obtencion;
           
                    //fin de portada general

            switch(c)
             {
                case 'F':
            
            
            //bases para la creacion de un pdf
            Document document = new Document();
            PdfWriter writer = PdfWriter.getInstance(document, out);
            document.open();
            
            
                     String relativeWebPath = "Image/cics.gif";
            String absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
            Image imghead = Image.getInstance(absoluteDiskPath);
            imghead.setAbsolutePosition(450f, 730f);
            imghead.scalePercent(50);
            document.add(imghead);

            Paragraph p = new Paragraph ("____________________________________________________",FontFactory.getFont("Arial",18,Font.BOLD,BaseColor.RED));

            relativeWebPath = "Image/logopoli.gif";
            absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
            imghead = Image.getInstance(absoluteDiskPath);
            imghead.setAbsolutePosition(90f, 730f);
            imghead.scalePercent(20);
            document.add(imghead);
            Paragraph salto = new Paragraph(" ");
                    String[] textos = {"                Boltea: [__ __ __ __ __ __ __ __ __ __]                         Afiliación: [__ __ __ __ __ __ __ __ __ __]","INSTITUTO POLITECNICO NACIONAL","CENTRO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS N° 9","'JUAN DE DIOS BATIZ'"};
                    //portada
                    for(i = 0; i < textos.length ; i++)
                     {
                      if(textos[i] == "CENTRO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS N° 9" )
                       {
                        Paragraph hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",10));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                      else
                      if(textos[i] == textos[0])
                       {
                         Paragraph hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",8));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                       else
                       {
                        Paragraph hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",14,Font.BOLD));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                    }
                    Paragraph hi = new Paragraph("SERVICIO MEDICO",FontFactory.getFont("Century Gothic",16,Font.BOLD));
                    hi.setAlignment(hi.ALIGN_CENTER);
                    document.add(hi);

                    hi = new Paragraph("Los datos personales recabados serán protegidos, incorporados y tratados en el sistema de datos personales SEAM (Sistema Escolar de Administración Médica); con fundamento en los artículos 10 y 32 del reglamento de la Ley General de Salud en Materia de Prestación de Servicios de Atención Medica, 23 fracciones ll y III del Reglamento Interior De La Secretaria De Salud y Las Normas NOM-008-SSA2-1993, NOM-015-SSA2-1994 y NOM-017-SSA2-1994 pertenecientes al reglamento de salud; así como también 20 y 21 de la LFTAIPG, Decimosexto, Decimoséptimo, Vigésimo Séptimo, Vigésimo Octavo, Vigésimo Noveno, Trigésimo, Trigésimo Primero, Trigésimo Segundo, Trigésimo Tercero de los Lineamientos de Protección de Datos Personales, el Reglamento Interno del Instituto Politécnico Nacional, el Reglamento de Estudios Escolarizados, para los niveles Media Superior y Superior del Instituto Politécnico Nacional y cuyo objetivo es contar con los datos personales del alumno para el control y seguimiento del servicio de salud, mismo que fueron registrados en el Listado de Sistemas de Datos Personales ante el Instituto Federal de Acceso a la Información Pública (www.ifai.org.mx), y podrán ser transmitidos a autoridades del CECyT “Juan de Dios Batíz”. A la Dirección de Administración Escolar, a la dirección de Educación Media Superior, a la Dirección de Egresados y Servicio Social, a la Dirección de Servicios Estudiantiles con la finalidad del manejo de estadísticas como son: Reporte Epidemiológico y Reporte de Obesidad , además de otras transmisiones previstas en la Ley. La Unidad Administrativa responsable del Sistema de Datos Personales es el Departamento de Servicio Médico del CECyT “Juan de Dios Batíz”, y la dirección donde el interesado podrá ejercer los derechos de acceso y corrección ante la misma es la propia Área del Servicio. Lo anterior se informa en el cumplimiento del Decimoséptimo de los Lineamientos de Protección de Datos Personales, publicados en el Diario Oficial de la Federación el 30 de septiembre del 2005.",FontFactory.getFont("Arial",10,Font.BOLD,BaseColor.BLACK));
                    hi.setAlignment(Element.ALIGN_JUSTIFIED);
                    //Impresion de informacion personal
            /*        rs = s.executeQuery ("select * from Calumnos where curp = '"+datocurp+"'");
                    while(rs.next())
                    {
                    document.add(hi);
                    document.add(new Paragraph("____________________________________________________",FontFactory.getFont("Arial",18,Font.BOLD,BaseColor.BLACK)));
                    document.add(new Paragraph("Autorizo Que La Información Personal Proporcionada Sea Empleada En El Servicio Médico Del Plantel Para El Diagnostico Y Atención Médica Básica En Caso Necesario.",FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                    document.add(new Paragraph("Nombre del padre o tutor: " + " " + rs.getObject("appt") + " " + rs.getObject("apmt") + " " + rs.getObject("nombret")));
                    document.add(new Paragraph("Nombre del alumno: " + " " + rs.getObject("apellidop") + " " + rs.getObject("apellidom") + " " + rs.getObject("nombre") + "          " + "Edad: " + rs.getObject("age") + "  años        " + "Sexo: " + rs.getObject("sexo")));
                    document.add(new Paragraph("Boleta: " + " " + rs.getString("bol") + "         " + "CURP:" + " " + rs.getObject("curp") ));
                    document.add(new Paragraph("Domicilio:" + " " + rs.getObject("colonia") + " " + rs.getObject("calle") + "   " + "Numero: " + rs.getObject("num") ));
                    document.add(new Paragraph("Delegacion o Municipio: " + " " + rs.getObject("delmun") + "         " + "Telefono:  " + rs.getObject("tel") ));
                    document.add(new Paragraph("Fecha de autorización: " + "_______________________"));
                    document.add(salto);
                    document.add(new Paragraph( "                                            " + "  ____________  " + "    " + "    ____________"));
                    document.add(new Paragraph( "                                            " + " Firma del alumno " + "    " + " Firma del Tutor "));
                    document.add(salto);
                    document.add(p);
                    document.add(new Paragraph("Dra Odette M. Viveros Domíngez                                                                                                                    Pagina 1",FontFactory.getFont("Century Gothic",10,Font.BOLD)));
                    }

            */        document.newPage();


                    relativeWebPath = "Image/cecyt9.gif";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(450f, 730f);
                    imghead.scalePercent(50);
                    document.add(imghead);

                    relativeWebPath = "Image/logopoli.gif";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(90f, 730f);
                    imghead.scalePercent(20);
                    document.add(imghead);
                    //portada general
            for(i = 0; i < textos.length ; i++)
                     {
                      if(textos[i] == "CENTRO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS N° 9" )
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",10));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                      else
                          if(textos[i] == textos[0])
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",8));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                       else
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",14,Font.BOLD));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                    }
                    hi = new Paragraph("SERVICIO MEDICO",FontFactory.getFont("Century Gothic",16,Font.BOLD));
                    hi.setAlignment(hi.ALIGN_CENTER);
                    document.add(hi);

                    //fin de portada general

            /*        rs = s.executeQuery ("select * from Calumnos where curp = '"+datocurp+"'");
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(new Paragraph("|.- Identificación Del Alumno ",FontFactory.getFont("Century Gothic",14,Font.BOLD)));
                    while(rs.next())
                     {
                      document.add(salto);
                      document.add(new Paragraph("Nombre del alumno:  " + rs.getObject("apellidop") + " " + rs.getObject("apellidom") + " " + rs.getObject("nombre") + "          " + "Edad: " + rs.getObject("age") + "  años        " + "Sexo: " + rs.getObject("sexo")));
                      document.add(new Paragraph("Tipo de sangre:  " + rs.getObject("tipsan") + "  RH: " + rs.getObject("rh")+ "   " + "Anexe Copia De Estudios De Laboratorio"));
                      document.add(new Paragraph("Tipo de atención Médica:  " + rs.getObject("atm")));
                      document.add(new Paragraph("Domicilio: " + " " + rs.getObject("colonia") + " " + rs.getObject("calle") + "   " + "Numero: " +  rs.getObject("num")));
                      document.add(new Paragraph("Delegación o Municipio: " + " " + rs.getObject("delmun") + "         " + "Telefono:  " + rs.getObject("tel") + "     Celular: " + rs.getObject("cel")));
                      document.add(new Paragraph("En caso de emergencia llamar a:  " + rs.getObject("telem") + "     Oficina de trabajo: " + rs.getObject("telof")));
                      relativeWebPath = rs.getString("urlt");
                      absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                      imghead = Image.getInstance(absoluteDiskPath);
                      imghead.setAbsolutePosition(300f, 630f);
                      imghead.scalePercent(50);
                      document.add(imghead);


                    }

                    document.add(salto);


                     //imprecion de linea
                    //PdfContentByte cb = writer.getDirectContent();
                    //cb.setColorFill(Color.RED);
                    //cb.rectangle(0, 315, 1000, 4);
                    //cb.fillStroke();
                     //obtener datos de las tablas a usar
                      document.add(new Paragraph(" ||.- Antecedentes Heredofamiliares ",FontFactory.getFont("Century Gothic",14,Font.BOLD)));
                      document.add(salto);
                      rs = s.executeQuery ("select * from dherencia where curp = '"+datocurp+"'");
                      String[] herencias1 = {"Dip","Dim","Diapp","Diapm","Diamp","Diamm"};
                      String[] herencias2 = {"Cap","Cam","Caapp","Caapm","Caamp","Caamm"};
                      String[] herencias3 = {"Hep","Hem","Heapp","Heapm","Heamp","Heamm"};
                      String[] herencias4 = {"Dep","Dem","Deapp","Deapm","Deamp","Deamm"};
                      String[] herencias5 = {"Obp","Obm","Obapp","Obapm","Obamp","Obamm"};
                      String[] herencias6 = {"Mep","Mem","Meapp","Meapm","Meamp","Meamm"};
                      String[] herencias7 = {"Nep","Nem","Neapp","Neapm","Neamp","Neamm"};
                      String[] herencias8 = {"Rep","Rem","Reapp","Reapm","Reamp","Reamm"};
                      String[] herencias9 = {"Csp","Csm","Csapp","Csapm","Csamp","Csamm"};
                      String[] herencias0 = {"Gip","Gim","Giapp","Giapm","Giamp","Giamm"};
                    PdfPTable tablas = new PdfPTable(7);
                    tablas.setWidthPercentage(100f);
                    
                    String[] family = {" ","Padre","Madre","Abuelo p","Abuela p","Abuelo m","Abuela m"};

                    for(i = 0 ; i < family.length; i++)
                     {
                      Paragraph tipo = new Paragraph(family[i],FontFactory.getFont("Century Gothic",10,Font.BOLD));
                      tablas.addCell(tipo);
                     }

                    while(rs.next())
                     {
                      Paragraph tipo = new Paragraph("Diabetes",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                      for(i = 0; i<herencias1.length; i++)
                       {
                        if( rs.getString(herencias1[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                       }

                      tipo = new Paragraph("Cancer",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                      for(i = 0; i<herencias2.length; i++)
                       {
                        if( rs.getString(herencias2[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                       }
                      tipo = new Paragraph("Hematológicos",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                      for(i = 0; i<herencias3.length; i++)
                       {
                        if( rs.getString(herencias3[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                       }
                      tipo = new Paragraph("Dermatológicos",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                      for(i = 0; i<herencias4.length; i++)
                       {
                        if( rs.getString(herencias4[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                       }
                      tipo = new Paragraph("Obesidad",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                      for(i = 0; i<herencias5.length; i++)
                      {
                       if( rs.getString(herencias5[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                       }
                     tipo = new Paragraph("Metabólicos",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                     for(i = 0; i<herencias6.length; i++)
                      {
                       if( rs.getString(herencias6[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                      }
                     tipo = new Paragraph("Neurológicos",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                     for(i = 0; i<herencias7.length; i++)
                      {
                       if( rs.getString(herencias7[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                      }
                     tipo = new Paragraph("Renales",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                    for(i = 0; i<herencias8.length; i++)
                     {
                      if( rs.getString(herencias8[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                     }
                   tipo = new Paragraph("Cardiovasculares",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                   for(i = 0; i<herencias9.length; i++)
                    {
                     if( rs.getString(herencias9[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                    }
                  tipo = new Paragraph("Ginecológicos",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                      tablas.addCell(tipo);
                  for(i = 0; i<herencias0.length; i++)
                   {
                    if( rs.getString(herencias0[i]).equals("1"))
                         {
                          tablas.addCell(new Paragraph("     X"));
                         }
                        else
                         {
                          tablas.addCell(" ");
                         }
                   }
             }
*/
 //           document.add(tablas);
            document.add(salto);
            document.add(salto);
            document.add(salto);
            document.add(salto);
            document.add(salto);
                    document.add(p);
                    document.add(new Paragraph("Dra Odette M. Viveros Domíngez                                                                                                                    Pagina 2",FontFactory.getFont("Century Gothic",10,Font.BOLD)));

            document.newPage();

            relativeWebPath = "Image/cecyt9.gif";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(450f, 730f);
                    imghead.scalePercent(50);
                    document.add(imghead);

                    relativeWebPath = "Image/logopoli.gif";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(90f, 730f);
                    imghead.scalePercent(20);
                    document.add(imghead);
                    //portada general
            for(i = 0; i < textos.length ; i++)
                     {
                      if(textos[i] == "CENTRO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS N° 9" )
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",10));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                      else
                      if(textos[i] == textos[0])
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",8));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                       else
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",14,Font.BOLD));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                    }
                    hi = new Paragraph("SERVICIO MEDICO",FontFactory.getFont("Century Gothic",16,Font.BOLD));
                    hi.setAlignment(hi.ALIGN_CENTER);
                    document.add(hi);

                    document.add(salto);
                    document.add(new Paragraph("|||.- Antecedentes Personales No Patológicos ",FontFactory.getFont("Century Gothic",14,Font.BOLD)));
            /*        rs = s.executeQuery ("select * from dnopato where curp = '"+datocurp+"'");
                    while(rs.next())
                     {

                      // datos para condiciones y desplieguez de info.

                      document.add(salto);
                      document.add(new Paragraph("   * Alimentación:",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                      dato = rs.getString("Ala");
                      //alergia
                      if(dato.equals("Si"))
                       {
                        imprime = "Alergico al: " + rs.getString("Tipoa");
                       }
                      else
                       {
                         imprime = "Sin alergia a un alimento";
                       }
                      document.add(new Paragraph(imprime));
                      document.add(new Paragraph("No. de comidas al día: " + rs.getObject("Noa") + "     No de comidas con la familia al dia: " + rs.getObject("Noaf")));
                      document.add(salto);
                      document.add(new Paragraph("   * Vivienda",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                      document.add(new Paragraph("Casa Propia: " + rs.getObject("Ccasa") + "     Telefono Propio: " + rs.getObject("CTel") + "     No. de Habitaciones para dormir: " +rs.getObject("Nhab") ));
                      //compartir cuarto
                      if(dato.equals("Si"))
                       {
                        imprime = "    Con cuantos: " + rs.getObject("Cncua");
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("No. de Baños: " + rs.getObject("Nban") + "     No. de habitantes en casa: " +  rs.getObject("Nhabi") +  "    Comparte cuarto: " + rs.getObject("Ccua") + imprime));
                      dato = rs.getString("Tmas");
                      //tiene mascotas
                      if(dato.equals("Si"))
                       {
                        imprime = "  Cuenta con:  " + rs.getString("Cmas") + " Mascota(s)"  + "   Tipo: " + rs.getString("QTmas") + "  Viven: " + rs.getObject("Vmas");
                       }
                      else
                       {
                        imprime = "";
                       }

                      document.add(new Paragraph("Tiene Mascota: " + rs.getObject("Tmas") + imprime ));
                      document.add(salto);
                      document.add(new Paragraph("   * Higiene",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                      document.add(new Paragraph("Baños coorporales a la semana: " + rs.getObject("Aco") + "    Aseo bucal al día: " + rs.getObject("Abu") + "     Cambio de ropa al día: " + rs.getObject("Crop")));
                      document.add(new Paragraph("Limpieza de la habitación a la semana : " + rs.getObject("Lcua") + "      Limpieza de la casa a la semana: " + rs.getObject("Lcas")));
                      document.add(salto);
                      document.add(new Paragraph("   * Hábitos y costumbres",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                      document.add(new Paragraph("Horas de actividad al dia"));
                      document.add(new Paragraph("Dormir: " + rs.getObject("Hsleep") + " horas" + "   Actividad escolar: " + rs.getObject("Hae") + " horas" + "   Tareas domesticas: " + rs.getObject("Had")+ " horas" + "   Ocio: " +  rs.getObject("Ho") + " horas"));
                      //deportes
                      dato = rs.getString("Odep");
                      if(dato.equals(" ") && rs.getString("Nata").equals("")&& rs.getString("Fut").equals("")&& rs.getString("Kara").equals("")&& rs.getString("Base").equals("")&& rs.getString("Tenis").equals("")&& rs.getString("Bas").equals("")&& rs.getString("Voll").equals("")&& rs.getString("Tae").equals("")&& rs.getString("Gym").equals("")&& rs.getString("Aj").equals(""))
                       {
                       imprime = "No Practica un deporte";
                       }
                      else
                       {
                        imprime = "Practica: " + rs.getString("Odep") + rs.getString("Nata") + rs.getString("Fut") + rs.getString("Kara") + rs.getString("Base") + rs.getString("Tenis") + rs.getString("Bas") + rs.getString("Voll") + rs.getString("Tae") + rs.getString("Gym") + rs.getString("Aj") + "       Horas a la semana de practica: " + rs.getObject("Hdep") + " horas";
                       }
                      document.add(new Paragraph(imprime));
                      document.add(new Paragraph("Religion: " + rs.getObject("Relg")));
                      document.add(salto);

                    }

                    rs = s.executeQuery ("select * from dpato where curp = '"+datocurp+"'");
                    while(rs.next())
                     {
                      document.add(new Paragraph("|V.- Antecedentes Personales Patológicos ",FontFactory.getFont("Century Gothic",14,Font.BOLD)));
                      document.add(salto);
                      document.add(new Paragraph("Varicela: " + rs.getObject("vari") + "  Sarampión: " + rs.getObject("sar") + "  Paperas: " + rs.getObject("pap") + "  Rubeola: " + rs.getObject("ru") + "  Influenza: " + rs.getObject("inf") + "  Otra: " + rs.getObject("pts")));
                      dato = rs.getString("tts");
                      if(dato.equals("Si"))
                       {
                        imprime = "  Razón: " + rs.getObject("phd");
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Le han transfundido sangre: " + rs.getObject("tts") + imprime ));
                      dato = rs.getString("thd");
                      if(dato.equals("Si"))
                       {
                        imprime = "  Razón: " + rs.getObject("phd");
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Le han hospitalizado: " + rs.getObject("thd")+ imprime));
                      dato = rs.getString("tao");
                      if(dato.equals("Si"))
                       {
                        imprime = "  Razón: " + rs.getObject("pao");
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Le han operado: " + rs.getObject("tao") + imprime));
                      dato = rs.getString("eam");
                      if(dato.equals("Si"))
                       {
                        imprime = "  Alérgico a: " + rs.getObject("ceam");
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Alergico a algun medicamento: " + rs.getObject("eam") + imprime ));
                      dato = rs.getString("fs");
                      if(dato.equals("Si"))
                       {
                        imprime = "  ¿Cúantos cigarros al día? : " + rs.getObject("cfs") + "   Desde hace " + rs.getObject("dfs") + " años.";
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Fuma: " + rs.getObject("fs") + imprime ));
                      dato = rs.getString("bha");
                      if(dato.equals("Si"))
                       {
                        imprime = "  ¿Cúantas veces a la semana? : " + rs.getObject("cbha") + "   Desde hace " + rs.getObject("dha") + " años.";
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Bebe: " + rs.getObject("bha") + imprime));
                      dato = rs.getString("usl");
                      if(dato.equals("Si"))
                       {
                        imprime = "  Razón: " + rs.getObject("pusl") + "   Desde hace " + rs.getObject("dusl") + " años.";
                       }
                      else
                       {
                        imprime = "";
                       }
                      document.add(new Paragraph("Usa lentes: " + rs.getObject("usl") + imprime));
                      document.add(new Paragraph("Enfermedades que padece: " +rs.getObject("cpd")  + "   Anexe nota médica"));
                    document.add(salto);
                    document.add(p);
                    document.add(new Paragraph("Dra Odette M. Viveros Domíngez                                                                                                                    Pagina 3",FontFactory.getFont("Century Gothic",10,Font.BOLD)));

                    }

            */        document.newPage();

                    relativeWebPath = "Image/cecyt9.gif";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(450f, 730f);
                    imghead.scalePercent(50);
                    document.add(imghead);

                    relativeWebPath = "Image/logopoli.gif";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(90f, 730f);
                    imghead.scalePercent(20);
                    document.add(imghead);
                    //portada general
            for(i = 0; i < textos.length ; i++)
                     {
                      if(textos[i] == "CENTRO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS N° 9" )
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",10));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                      else
                      if(textos[i] == textos[0])
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",8));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                       else
                       {
                        hi = new Paragraph(textos[i],FontFactory.getFont("Century Gothic",14,Font.BOLD));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                       }
                    }
                    hi = new Paragraph("SERVICIO MEDICO",FontFactory.getFont("Century Gothic",16,Font.BOLD));
                    hi.setAlignment(hi.ALIGN_CENTER);
                    document.add(hi);
                    document.add(salto);
                    document.add(new Paragraph("V.- Exploracion física (Debe llenarse por personal de salud) ",FontFactory.getFont("Century Gothic",14,Font.BOLD)));
                    document.add(salto);
                    document.add(new Paragraph("   * Somatometría",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                    document.add(new Paragraph("Peso: ____ ____ ____ KG    Talla: ____ ____ cm    Glicemia ____ ____ ____ mg/dl "));
                    document.add(new Paragraph("Posprandrial ___ ó Preprandial ___"));
                    document.add(new Paragraph("Perìmetro abdominal: _____ _____"));
                    document.add(new Paragraph("IMC: ___ ___ ___    T/A ____ / ____"));
                    document.add(salto);
                    document.add(new Paragraph("   * Salud visual",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                    document.add(new Paragraph("Visión a los 3 metros:    OD: ___ ___ / ___ ___    OI: ___ ___ / ___ ___ "));
                    document.add(new Paragraph("Existencia de datos patológicos: Si: __ No: __ "));
                    document.add(new Paragraph("Especifique: ____________________________________________________________________________"));
                    document.add(new Paragraph("Recomendaciones: _____________________________________________________________________________"));
                    document.add(salto);
                    document.add(new Paragraph("   * Salud bucal",FontFactory.getFont("Century Gothic",12,Font.BOLD)));
                    document.add(salto);
                    document.add(new Paragraph("Órganos dentales:"));
                    document.add(new Paragraph("Perdidos: ______"));
                    document.add(new Paragraph("Obturados: ______"));
                    document.add(new Paragraph("Cariados: ______"));

                    relativeWebPath = "Image/Dibujo.GIF";
                    absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
                    imghead = Image.getInstance(absoluteDiskPath);
                    imghead.setAbsolutePosition(150f, 250f);
                    imghead.scalePercent(40);
                    document.add(imghead);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(salto);
                    document.add(p);
                    document.add(new Paragraph("Dra Odette M. Viveros Domíngez                                                                                                                    Pagina 4",FontFactory.getFont("Century Gothic",10,Font.BOLD)));
                  

            break;
                case 'R':



                  document = new Document();
            writer = PdfWriter.getInstance(document, out);
            document.open();
            relativeWebPath = "Image/cecyt9.gif";
            absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
            imghead = Image.getInstance(absoluteDiskPath);
            imghead.setAbsolutePosition(450f, 730f);
            imghead.scalePercent(50);
            document.add(imghead);

            p = new Paragraph ("____________________________________________________",FontFactory.getFont("Arial",18,Font.BOLD,BaseColor.RED));

            relativeWebPath = "Image/logopoli.gif";
            absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
            imghead = Image.getInstance(absoluteDiskPath);
            imghead.setAbsolutePosition(90f, 730f);
            imghead.scalePercent(20);
            document.add(imghead);
            salto = new Paragraph(" ");
                  //portada
                    String[] textos2 = {"INSTITUTO POLITECNICO NACIONAL","DIRECCION DE APOYO A ESTUDIANTES","DIVISION DE PRESTACIONES Y SERVICIOS MEDICOS","INFORME MEDICO GLOBAL ","CECyT. No.9 'JUAN DE DIOS BATIZ'"};
                    //portada
                    for(i = 0; i < textos2.length ; i++)
                     {
                        hi = new Paragraph(textos2[i],FontFactory.getFont("Arial",11,Font.BOLD));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                    }

                    //Absorver valores de lo enviado
                    String mes = request.getParameter("mes");
                    String ano = request.getParameter("ano");
                    document.add(salto);
                    hi = new Paragraph("CORRESPONDIENTE AL MES DE: " + mes + " " + ano + "        REPORTE GLOBAL" ,FontFactory.getFont("Arial",8,Font.UNDERLINE));
                    hi.setAlignment(hi.ALIGN_CENTER);
                    document.add(hi);
                 //creacion de tablas y variables
                 String[] nombre = {"No.","Actividades","Estudiantes","Docentes","Admon","Externos","Total","Observación"};
                 String[] Actividades = {"Consultas Medicas","Seguimientos Medicos","Consultas de Especialidad","Procedimientos Especializados","Certificados Medicos","Referencias Medicas"};
                 String[] servicio = {"consultas","seguimientoc","consultaes","procedimientoe","certificadom","referenciam"};
                 String[] tipo = {"Estudiante","Docente","Administrativo","Externo"};
                 String[] Pauxilio = {"Glicemias","Curaciones","Inyecciones","Vendajes","Signos Vitales"};
                 String[] Auxilios = {"glicemia","curacion","inyeccion","vendaje"};

                 PdfPTable tabla = new PdfPTable(4);
                 String[] tipom = {"MEDICOS","MEDICO PASANTE EN SERVICIO SOCIAL","PASANTE DEL AREA DE INGENIERIA"};
                 String[] si = {"1","1","-","0","0","1","0","0","-"};

                 tabla.addCell(new Paragraph ("Numero total de personal",FontFactory.getFont("Arial",8,Font.BOLD)));
                 tabla.addCell(new Paragraph ("ESC. MAT",FontFactory.getFont("Arial",8,Font.BOLD)));
                 tabla.addCell(new Paragraph ("ESC. VESP",FontFactory.getFont("Arial",8,Font.BOLD)));
                 tabla.addCell(new Paragraph ("DSE",FontFactory.getFont("Arial",8,Font.BOLD)));
                 int numerodf = 0;
                 for(i = 0; i<tipom.length;i++)
                  {
                   tabla.addCell(new Paragraph (tipom[i],FontFactory.getFont("Arial",8,Font.BOLD)));
                   for(j=numerodf;j<si.length;j++)
                    {
                     tabla.addCell(new Paragraph (si[j],FontFactory.getFont("Arial",8,Font.BOLD)));
                     tabla.addCell(new Paragraph (si[j+1],FontFactory.getFont("Arial",8,Font.BOLD)));
                     tabla.addCell(new Paragraph (si[j+2],FontFactory.getFont("Arial",8,Font.BOLD)));
                     break;
                    }
                   numerodf = j+3;
                   }



                 document.add(salto);
                 document.add(tabla);
                 tabla = new PdfPTable(8);

	         tabla.setWidths(new int[]{3, 10, 8,6,5,6,5,8});
                 tabla.getDefaultCell().setHorizontalAlignment(Element.ALIGN_CENTER);

                 for(i = 0; i < nombre.length; i++)
                  {
                   PdfPCell cell = new PdfPCell (new Paragraph (nombre[i],FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.RED)));
                   cell.setPadding (5.0f);
                   tabla.addCell (cell);
                  }
                //impresion de la tabla
                tabla.addCell(new Paragraph ("1.-",FontFactory.getFont("Arial",8,Font.BOLD)));
                PdfPCell cell = new PdfPCell (new Paragraph ("Servicios Medicos",FontFactory.getFont("Arial",8,Font.BOLD)));
                tabla.addCell (cell);
                int cantidad = 0;
                int cantidad2 = 0;
                int cantidad3 = 0;
                //todo en sm
                for(j = 0; j<tipo.length; j++)
                 {
                  cantidad = 0;
                  for(i = 0; i<servicio.length;i++)
                   {
            /*        rs = s.executeQuery ("select count(*) from ServicioM where tipo = '"+tipo[j]+"' and mes ='"+mes+"' and anos = '"+ano+"' and "+servicio[i]+" = '1'");
                    rs.next();
                    cantidad += rs.getInt(1);
                    cantidad2 += rs.getInt(1);
                    cantidad3 += rs.getInt(1);
            */       }
                  tabla.addCell(""+cantidad);
                 }
                //suma en todos en sm
                tabla.addCell(""+cantidad2);
                tabla.addCell(" ");
                
                //impresion de registros de servicio medico
                PdfPCell celdas =new PdfPCell (new Paragraph(""));
                celdas.setRowspan(6);
                tabla.addCell(celdas);
                for(i = 0; i < Actividades.length ; i++)
                 {
                  cell = new PdfPCell (new Paragraph (Actividades[i],FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                  tabla.addCell (cell);
                  //todos
                  for(j = 0; j < tipo.length; j++)
                   {
            /*        rs = s.executeQuery ("select count(*) from ServicioM where tipo = '"+tipo[j]+"' and mes ='"+mes+"' and anos = '"+ano+"' and "+servicio[i]+" = '1'");
                    rs.next();
                    cantidad = rs.getInt(1);
                    tabla.addCell(""+cantidad);
            */       }
                  //total
            /*      rs = s.executeQuery ("select count(*) from ServicioM where mes ='"+mes+"' and anos = '"+ano+"' and "+servicio[i]+" = '1'");
                  rs.next();
                  cantidad = rs.getInt(1);
                  tabla.addCell(""+cantidad);
                  //
                  tabla.addCell(" ");
            */     }
                //impresion de la tabla auxilio
                tabla.addCell(new Paragraph ("2.-",FontFactory.getFont("Arial",8,Font.BOLD)));
                cell = new PdfPCell (new Paragraph ("Atención de primeros auxilios",FontFactory.getFont("Arial",8,Font.BOLD)));
                tabla.addCell (cell);
                cantidad = 0;
                cantidad2 = 0;
                //todos en pa
                for(j = 0; j<tipo.length; j++)
                 {
                  cantidad = 0;
                  for(i = 0; i<Auxilios.length;i++)
                   {
            /*        rs = s.executeQuery ("select count(*) from PrimerA where tipo = '"+tipo[j]+"' and mes ='"+mes+"' and anos = '"+ano+"' and "+Auxilios[i]+" = '1'");
                    rs.next();
                    cantidad += rs.getInt(1);
                    cantidad2 += rs.getInt(1);
                    cantidad3 += rs.getInt(1);
            */       }
                  tabla.addCell(""+cantidad);
                 }
                //suma de todos en pa
                tabla.addCell(""+cantidad2);
                tabla.addCell(" ");
                //impresion de registros de primeros auxilios
                celdas =new PdfPCell (new Paragraph(""));
                celdas.setRowspan(5);
                tabla.addCell(celdas);
                for(i = 0; i < Pauxilio.length ; i++)
                 {
                  if(Pauxilio[i] == Pauxilio[4])
                   {
                    cell = new PdfPCell (new Paragraph (Pauxilio[i],FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                    tabla.addCell (cell);
                    for(j =0; j<5;j++)
                     {
                      tabla.addCell("");
                     }
                    cell = new PdfPCell (new Paragraph ("Contemplados en cada consulta",FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                    tabla.addCell(cell);
                    break;
                  }
                  else
                  {
                  cell = new PdfPCell (new Paragraph (Pauxilio[i],FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                  tabla.addCell(cell);
                  //todos
                  for(j = 0; j < tipo.length; j++)
                   {
            /*        rs = s.executeQuery ("select count(*) from PrimerA where tipo = '"+tipo[j]+"' and mes ='"+mes+"' and anos = '"+ano+"' and "+Auxilios[i]+" = '1'");
                    rs.next();
                    cantidad = rs.getInt(1);
                    tabla.addCell(""+cantidad);
             */      }
                  //total
            /*      rs = s.executeQuery ("select count(*) from PrimerA where mes ='"+mes+"' and anos = '"+ano+"' and "+Auxilios[i]+" = '1'");
                  rs.next();
                  cantidad = rs.getInt(1);
                  tabla.addCell(""+cantidad);
                  //observaciones
             */     tabla.addCell(" ");
                 }
                }
                cell = new PdfPCell (new Paragraph ("3.-",FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                tabla.addCell(cell);
                cell = new PdfPCell (new Paragraph ("AFILIACIÓN DE ESTUDIANTES AL SEGURO FACULTATIVO:",FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                tabla.addCell(cell);
                PdfPCell celda =new PdfPCell (new Paragraph(""));
                celda.setColspan(5);
                tabla.addCell(celda);
                 
                cell = new PdfPCell (new Paragraph ("A cargo de control escolar",FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                tabla.addCell(cell);

                celda.setColspan(5);
                tabla.addCell(celda);
                cell = new PdfPCell (new Paragraph ("Total de acciones:",FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                tabla.addCell(cell);
                cell = new PdfPCell (new Paragraph (""+cantidad3,FontFactory.getFont("Arial",8,Font.BOLD,BaseColor.BLACK)));
                tabla.addCell(cell);
                tabla.addCell("");
                document.add(salto);
                hi = new Paragraph("ATENCIÓN BÁSICA PARA LA SALUD",FontFactory.getFont("Arial",8,Font.ITALIC));
                hi.setAlignment(Element.ALIGN_CENTER);
                document.add(hi);
                document.add(salto);
                document.add(tabla);
                document.add(salto);
                hi = new Paragraph("__________________________                               __________________",FontFactory.getFont("Century Gothic",8,Font.BOLD));
                hi.setAlignment(hi.ALIGN_CENTER);
                document.add(hi);
                hi = new Paragraph("PROFESORA: ANA MARÍA GRACÍAN BUSTAMANTE                                         DRA. ODETTE M. VIVEROS DOMÍNGUEZ",FontFactory.getFont("Century Gothic",5,Font.BOLD));
                hi.setAlignment(hi.ALIGN_CENTER);
                document.add(hi);
                hi = new Paragraph("JEFA DEL DEPARTAMENTO DE SERVICIOS ESTUDIANTILES                                  RESPONSABLE DEL INFORME MÉDICO",FontFactory.getFont("Century Gothic",5,Font.ITALIC));
                hi.setAlignment(hi.ALIGN_CENTER);
                document.add(hi);
                 document.close();

                break;

                case 'I':


                    document = new Document(PageSize.LETTER.rotate());
            writer = PdfWriter.getInstance(document, out);
            document.open();
            relativeWebPath = "Image/cecyt9.gif";
            absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
            imghead = Image.getInstance(absoluteDiskPath);
            imghead.setAbsolutePosition(580f, 500f);
            imghead.scalePercent(50);
            document.add(imghead);

            p = new Paragraph ("____________________________________________________",FontFactory.getFont("Arial",18,Font.BOLD,BaseColor.RED));

            relativeWebPath = "Image/logopoli.gif";
            absoluteDiskPath = getServletContext().getRealPath(relativeWebPath);
            imghead = Image.getInstance(absoluteDiskPath);
            imghead.setAbsolutePosition(180f, 500f);
            imghead.scalePercent(20);
            document.add(imghead);
            salto = new Paragraph(" ");
                   //Absorver valores de lo enviado
                    String nombred = "",appp = "",appm = "";
                    String dia = request.getParameter("dia");
                    mes = request.getParameter("mes");
                    ano = request.getParameter("ano");

                    String usuario = request.getParameter("usuario");
            /*        rs = s.executeQuery ("select * from Mmedico where usuario = '"+usuario+"'");
                    while(rs.next())
                     {
                      nombred = rs.getString("nombred");
                      appp = rs.getString("appd");
                      appm = rs.getString("apmd");
                     }


            */       String[] textos3 = {"INSTITUTO POLITÉCNICO NACIONÁL","CENTRO DE ESTUDIOS CIENTÍFICOS Y TECNOLÓGICOS ","'JUAN DE DIOS BATIZ'","DIRECCION DE SERVICIOS ESTUDIANTILES","DEPARTAMENTO DE SERVICIOS MÉDICOS"};
                    //portada
                    for(i = 0; i < textos3.length ; i++)
                     {
                        hi = new Paragraph(textos3[i],FontFactory.getFont("Arial",11,Font.BOLD));
                        hi.setAlignment(Element.ALIGN_CENTER);
                        document.add(hi);
                    }
                   hi = new Paragraph("INFORME DIARIO",FontFactory.getFont("Arial",10,Font.UNDERLINE));
                   hi.setAlignment(hi.ALIGN_CENTER);
                   document.add(salto);
                   document.add(hi);
                   document.add(salto);
                   hi = new Paragraph(usuario,FontFactory.getFont("Arial",10,Font.UNDERLINE));
                   document.add(new Paragraph("Dr(a): " + nombred + " " + appp + " " + appm + "                                              FECHA: " + dia + " de " + mes + " del " + ano ));

                   tabla = new PdfPTable(10);
                   tabla.setWidths(new int[]{3,7,12,6,5,4,10,9,8,5});
                   tabla.setWidthPercentage(100f);
                   //celda =new PdfPCell (new Paragraph(""));
                   //celda.setColspan();
                   //tabla.addCell(celda);
                   i = 1;
                   String[] trs = {"No.V","Usuario","Nombre","Boleta","Sexo","Grupo","Medicamento","Tratamiento","Alergias","Clave CIE"};
                   for(i = 0; i<trs.length;i++)
                    {
                     tabla.addCell(new Paragraph(""+trs[i],FontFactory.getFont("Arial",8,Font.BOLD)));
                    }
            /*       rs = s.executeQuery ("select * from Dseguimiento where usuario = '"+usuario+"' and Dia = '"+dia+"' and mes = '"+mes+"' and anos = '"+ano+"' ");
                   while(rs.next())
                   {
                    dato = rs.getString("tipo");
                    if(dato.equals("Estudiante"))
                     {
                      tabla.addCell(new Paragraph(rs.getString("nvisita"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(rs.getString("tipo"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      rs2 = s2.executeQuery("select * from Calumnos where curp = '"+rs.getString("curpa")+"'");
                      while(rs2.next())
                       {
                        tabla.addCell(new Paragraph(rs2.getString("nombre"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                        tabla.addCell(new Paragraph(rs2.getString("bol"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                        tabla.addCell(new Paragraph(rs2.getString("sexo"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                       }
                      tabla.addCell(new Paragraph(rs.getString("grupo"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(rs.getString("tratamiento"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      rs2 = s2.executeQuery("select * from ServicioM where id = '"+rs.getString("id")+"'");
                      String textocompleto = "";
                     while(rs2.next())
                       {
                        if( rs2.getString("consultas").equals("1"))
                         {
                          textocompleto += "Consulta especializada";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("seguimientoc").equals("1"))
                         {
                          textocompleto += " Seg Clinico";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("consultaes").equals("1"))
                         {
                          textocompleto += " Cons. Especial";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("procedimientoe").equals("1"))
                         {
                          textocompleto += " Proc. Espec.";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("referenciam").equals("1"))
                         {
                          textocompleto += " Referencia";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                       }
                       rs2 = s2.executeQuery("select * from PrimerA where id = '"+rs.getString("id")+"'");
                       while(rs2.next())
                       {
                        if( rs2.getString("glicemia").equals("1"))
                         {
                          textocompleto += " DXTX";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("curacion").equals("1"))
                         {
                          textocompleto += " Curac";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("inyeccion").equals("1"))
                         {
                          textocompleto += " Inyecc";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("vendaje").equals("1"))
                         {
                          textocompleto += " Vdaj";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        tabla.addCell(new Paragraph(textocompleto,FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                       }
                      rs2 = s2.executeQuery("select ceam from Dpato where curp = '"+rs.getString("curpa")+"'");
                      rs2.next();
                      tabla.addCell(new Paragraph(rs2.getString("ceam"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      

                      tabla.addCell(new Paragraph(rs.getString("ficha"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));

                     }
                    else
                     {
                      tabla.addCell(new Paragraph(rs.getString("nvisita"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(rs.getString("tipo"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(rs.getString("curpa"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(" "));
                      tabla.addCell(new Paragraph(rs.getString("sex"),FontFactory.getFont("Arial",6,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(" "));
                      tabla.addCell(new Paragraph(rs.getString("tratamiento"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                       rs2 = s2.executeQuery("select * from ServicioM where id = '"+rs.getString("id")+"'");
                      String textocompleto = "";
                     while(rs2.next())
                       {
                        if( rs2.getString("consultas").equals("1"))
                         {
                          textocompleto += "Consulta especializada";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("seguimientoc").equals("1"))
                         {
                          textocompleto += " Seg Clinico";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("consultaes").equals("1"))
                         {
                          textocompleto += " Cons. Especial";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("procedimientoe").equals("1"))
                         {
                          textocompleto += " Proc. Espec.";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("referenciam").equals("1"))
                         {
                          textocompleto += " Referencia";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                       }
                       rs2 = s2.executeQuery("select * from PrimerA where id = '"+rs.getString("id")+"'");
                       while(rs2.next())
                       {
                        if( rs2.getString("glicemia").equals("1"))
                         {
                          textocompleto += " DXTX";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("curacion").equals("1"))
                         {
                          textocompleto += " Curac";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("inyeccion").equals("1"))
                         {
                          textocompleto += " Inyecc";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        if( rs2.getString("vendaje").equals("1"))
                         {
                          textocompleto += " Vdaj";
                         }
                        else
                         {
                          textocompleto += "";
                         }
                        tabla.addCell(new Paragraph(textocompleto,FontFactory.getFont("Arial",8,Font.UNDEFINED)));
                       }
                      tabla.addCell(new Paragraph("hola",FontFactory.getFont("Arial",6,Font.UNDEFINED)));
                      tabla.addCell(new Paragraph(rs.getString("ficha"),FontFactory.getFont("Arial",8,Font.UNDEFINED)));

                    }
                    }
                */   document.add(salto);
                   document.add(tabla);
                   //celda.setColspan(5);
//en caso de error solo dejar esto
                    //documento.add(new Paragraph("hola mundo"));
                    document.close();
                    break;

             }
        }
                catch (DocumentException exc){
                throw new IOException(exc.getMessage());
                }
        catch(Exception exc)
        {
         exc.printStackTrace();   
        }
        finally {
            out.close();
        }

    }
    @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Documento.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(Documento.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Documento.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(Documento.class.getName()).log(Level.SEVERE, null, ex);
        }

}
}