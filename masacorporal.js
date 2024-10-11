
n=int(input("Por favor ingrese el nunmero de personas quegit push -u origin main quiere consultar el indice de masacorporal "))
i=0
while i < n:
    i+=1
    nombre = input("Por favor, ingrese su nombre")
    apellido = input("Por favor, ingrese su apellido ")
    peso = float(input("Por favor, ingrese su peso en kg"))
    altura = float(input("Por favor, ingrese su altura"))
    indicema = peso / altura ** 2
    if indicema >=0 and indicema<=24.9:
        print(nombre," ",apellido ," su masa corporal es: ", indicema, " por lo tanto el riesgo es bajo" )
    elif indicema>24.9 and indicema<=34.9:
        print(nombre, " ", apellido, " su masa corporal es: ", indicema, " por lo tanto el riesgo es moderado")
    elif indicema>34.9:
        print(nombre, " ", apellido, " su masa corporal es: ", indicema, " por lo tanto el riesgo es alto")


