import { SectionData } from "./typeEj";

const SECTIONS_DATA: SectionData[] = [
    {
        id: "enum",
        title: "Datos Enumerados (Enum)",
        description:
            "Los enums en Java son tipos especiales que representan un grupo fijo de constantes. Son perfectos para representar estados, categorías o cualquier conjunto predefinido de valores.",
        color: "primary",
        examples: [
            {
                title: "Enum con Estados de Proceso y Métodos",
                code: `public enum EstadoProceso {
    PENDIENTE("En espera de ejecución"),
    EJECUTANDO("Proceso en curso"),
    COMPLETADO("Finalizado exitosamente"),
    ERROR("Falló durante la ejecución");
    
    private final String descripcion;
    
    EstadoProceso(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
    
    public boolean puedeCancelar() {
        return this == PENDIENTE || this == EJECUTANDO;
    }
    
    public boolean esFinal() {
        return this == COMPLETADO || this == ERROR;
    }
    
    // Uso de values() y valueOf()
    public static void mostrarEstados() {
        for (EstadoProceso estado : EstadoProceso.values()) {
            System.out.println(estado.name() + ": " + estado.getDescripcion());
        }
    }
}

// Uso en aplicación
public class GestorProcesos {
    public static void main(String[] args) {
        EstadoProceso estado = EstadoProceso.PENDIENTE;
        System.out.println("Estado: " + estado);
        System.out.println("Descripción: " + estado.getDescripcion());
        System.out.println("¿Puede cancelar?: " + estado.puedeCancelar());
        
        // Conversión desde String
        EstadoProceso estadoDesdeTexto = EstadoProceso.valueOf("COMPLETADO");
        System.out.println("Estado desde texto: " + estadoDesdeTexto);
        
        // Mostrar todos los estados
        EstadoProceso.mostrarEstados();
    }
}`,
            },
            {
                title: "Enum con Implementación de Interface",
                code: `// Interface para operaciones matemáticas
public interface Operacion {
    double aplicar(double a, double b);
}

// Enum que implementa la interface
public enum OperacionAritmetica implements Operacion {
    SUMA {
        public double aplicar(double a, double b) {
            return a + b;
        }
    },
    RESTA {
        public double aplicar(double a, double b) {
            return a - b;
        }
    },
    MULTIPLICACION {
        public double aplicar(double a, double b) {
            return a * b;
        }
    },
    DIVISION {
        public double aplicar(double a, double b) {
            if (b == 0) throw new ArithmeticException("División por cero");
            return a / b;
        }
    };
    
    // Método estático para buscar operación
    public static OperacionAritmetica desdeSimbolo(String simbolo) {
        return switch(simbolo) {
            case "+" -> SUMA;
            case "-" -> RESTA;
            case "*" -> MULTIPLICACION;
            case "/" -> DIVISION;
            default -> throw new IllegalArgumentException("Símbolo no válido: " + simbolo);
        };
    }
}

// Uso en calculadora
public class Calculadora {
    public static void main(String[] args) {
        double x = 10, y = 3;
        
        for (OperacionAritmetica op : OperacionAritmetica.values()) {
            try {
                double resultado = op.aplicar(x, y);
                System.out.printf("%s: %.2f %s %.2f = %.2f%n", 
                    op.name(), x, op.name().charAt(0), y, resultado);
            } catch (ArithmeticException e) {
                System.out.println("Error en " + op.name() + ": " + e.getMessage());
            }
        }
        
        // Uso con símbolo
        OperacionAritmetica operacion = OperacionAritmetica.desdeSimbolo("*");
        System.out.println("Resultado: " + operacion.aplicar(5, 4));
    }
}`,
            },
        ],
    },
    {
        id: "formato",
        title: "Formato de Datos",
        description:
            "El formateo de datos es esencial para presentar información de manera legible y profesional. Java ofrece múltiples herramientas para formatear strings, números y fechas.",
        color: "secondary",
        examples: [
            {
                title: "Formato Avanzado con Locale y Especificadores",
                code: `import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class FormatoAvanzado {
    public static void main(String[] args) {
        // Formato numérico con diferentes locales
        double cantidad = 1234567.8912;
        NumberFormat[] formateadores = {
            NumberFormat.getNumberInstance(Locale.US),      // 1,234,567.891
            NumberFormat.getNumberInstance(Locale.GERMANY), // 1.234.567,891
            NumberFormat.getNumberInstance(new Locale("es", "NI")) // 1,234,567.891
        };
        
        System.out.println("=== FORMATO NUMÉRICO INTERNACIONAL ===");
        for (NumberFormat nf : formateadores) {
            nf.setMaximumFractionDigits(3);
            System.out.println(nf.format(cantidad));
        }
        
        // Formato de moneda
        NumberFormat monedaUS = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat monedaLocal = NumberFormat.getCurrencyInstance(new Locale("es", "NI"));
        System.out.println("\\n=== FORMATO MONEDA ===");
        System.out.println("USD: " + monedaUS.format(cantidad));
        System.out.println("Local: " + monedaLocal.format(cantidad));
        
        // Formato de fecha y hora avanzado
        LocalDateTime ahora = LocalDateTime.now();
        DateTimeFormatter[] formatosFecha = {
            DateTimeFormatter.ISO_LOCAL_DATE_TIME,
            DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"),
            DateTimeFormatter.ofPattern("EEEE, d 'de' MMMM 'de' yyyy", new Locale("es", "NI")),
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS")
        };
        
        System.out.println("\\n=== FORMATOS DE FECHA ===");
        for (DateTimeFormatter formato : formatosFecha) {
            System.out.println(ahora.format(formato));
        }
        
        // Formato printf avanzado para reportes
        System.out.println("\\n=== REPORTE TABULAR ===");
        System.out.printf("%-15s %-10s %12s %12s%n", "Producto", "Categoría", "Precio", "Stock");
        System.out.println("─".repeat(55));
        System.out.printf("%-15s %-10s %12.2f %12d%n", "Laptop Dell", "Tecnología", 899.99, 15);
        System.out.printf("%-15s %-10s %12.2f %12d%n", "Mouse Logi", "Accesorios", 25.50, 100);
        System.out.printf("%-15s %-10s %12.2f %12d%n", "Monitor 24'", "Tecnología", 299.999, 8);
        
        // Formato científico y porcentaje
        System.out.println("\\n=== FORMATOS ESPECIALES ===");
        double velocidad = 299792458;
        double tasa = 0.075;
        System.out.printf("Velocidad luz: %e m/s%n", velocidad);
        System.out.printf("Velocidad luz: %.3e m/s%n", velocidad);
        System.out.printf("Tasa interés: %.2f%%%n", tasa * 100);
        System.out.printf("Tasa interés: %.1f%%%n", tasa * 100);
    }
}`,
            },
            {
                title: "DecimalFormat y Parsing de Datos",
                code: `import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

public class FormatoDecimalAvanzado {
    public static void main(String[] args) {
        // Patrones complejos de DecimalFormat
        double[] numeros = {1234.567, -9876.543, 0.12345, 1234567.89};
        
        String[] patrones = {
            "#,##0.00",
            "¤#,##0.00;(¤#,##0.00)",
            "0.###E0",
            "#,##0.00%",
            "###,##0.###"
        };
        
        System.out.println("=== FORMATOS DECIMALES AVANZADOS ===");
        for (String patron : patrones) {
            DecimalFormat df = new DecimalFormat(patron);
            System.out.println("\\nPatrón: " + patron);
            for (double num : numeros) {
                System.out.printf("  %12.3f -> %s%n", num, df.format(num));
            }
        }
        
        // DecimalFormat con símbolos personalizados
        DecimalFormatSymbols simbolosPersonalizados = new DecimalFormatSymbols();
        simbolosPersonalizados.setDecimalSeparator(',');
        simbolosPersonalizados.setGroupingSeparator('.');
        simbolosPersonalizados.setMinusSign('–');
        
        DecimalFormat dfPersonalizado = new DecimalFormat("#,##0.00", simbolosPersonalizados);
        System.out.println("\\n=== FORMATO PERSONALIZADO ===");
        System.out.println("Número formateado: " + dfPersonalizado.format(-1234567.891));
        
        // Parsing de strings numéricos
        System.out.println("\\n=== PARSING DE DATOS ===");
        String[] entradas = {"1.234,56", "–987.654,32", "45%", "1.234E2"};
        
        DecimalFormat[] parsers = {
            new DecimalFormat("#,##0.00", simbolosPersonalizados),
            new DecimalFormat("#,##0.00", DecimalFormatSymbols.getInstance(Locale.US)),
            new DecimalFormat("0%"),
            new DecimalFormat("0.###E0")
        };
        
        for (String entrada : entradas) {
            for (int i = 0; i < parsers.length; i++) {
                try {
                    Number numero = parsers[i].parse(entrada);
                    System.out.printf("Entrada: %-12s -> Parser %d: %f%n", 
                        entrada, i + 1, numero.doubleValue());
                    break;
                } catch (ParseException e) {
                    // Continuar con el siguiente parser
                }
            }
        }
        
        // Formato para números muy grandes y muy pequeños
        System.out.println("\\n=== NÚMEROS EXTREMOS ===");
        double[] extremos = {Double.MAX_VALUE, Double.MIN_VALUE, 0.000000123, 123456789012345.67};
        DecimalFormat dfCientifico = new DecimalFormat("0.#####E0");
        
        for (double extremo : extremos) {
            System.out.printf("Original: %e -> Formateado: %s%n", 
                extremo, dfCientifico.format(extremo));
        }
    }
}`,
            },
        ],
    },
    {
        id: "random",
        title: "Números Aleatorios",
        description:
            "La generación de números aleatorios es fundamental para simulaciones, juegos, testing y aplicaciones de seguridad. Java proporciona varias formas de generar números aleatorios.",
        color: "accent",
        examples: [
            {
                title: "Simulación con Random y Análisis Estadístico",
                code: `import java.util.Random;
import java.util.Arrays;

public class SimulacionEstadistica {
    public static void main(String[] args) {
        Random random = new Random(42); // Semilla fija para reproducibilidad
        
        // Simulación de lanzamiento de dados
        System.out.println("=== SIMULACIÓN DE DADOS ===");
        int[] frecuenciaDados = new int[13]; // 2-12 para dos dados
        
        for (int i = 0; i < 10000; i++) {
            int dado1 = random.nextInt(6) + 1;
            int dado2 = random.nextInt(6) + 1;
            int suma = dado1 + dado2;
            frecuenciaDados[suma]++;
        }
        
        System.out.println("Resultados de 10,000 lanzamientos:");
        for (int i = 2; i <= 12; i++) {
            System.out.printf("Suma %2d: %4d veces (%.1f%%)%n", 
                i, frecuenciaDados[i], (frecuenciaDados[i] / 10000.0) * 100);
        }
        
        // Generación de números con distribución normal (Gaussiana)
        System.out.println("\\n=== DISTRIBUCIÓN NORMAL ===");
        double[] muestras = new double[1000];
        double suma = 0;
        
        for (int i = 0; i < muestras.length; i++) {
            muestras[i] = random.nextGaussian() * 15 + 100; // μ=100, σ=15
            suma += muestras[i];
        }
        
        double media = suma / muestras.length;
        System.out.printf("Media: %.2f%n", media);
        
        // Simulación de Monte Carlo para π
        System.out.println("\\n=== SIMULACIÓN DE MONTE CARLO (π) ===");
        int puntosCirculo = 0;
        int totalPuntos = 1000000;
        
        for (int i = 0; i < totalPuntos; i++) {
            double x = random.nextDouble() * 2 - 1; // -1 to 1
            double y = random.nextDouble() * 2 - 1; // -1 to 1
            if (x * x + y * y <= 1) {
                puntosCirculo++;
            }
        }
        
        double piAproximado = 4.0 * puntosCirculo / totalPuntos;
        System.out.printf("π aproximado: %.6f (error: %.6f)%n", 
            piAproximado, Math.abs(Math.PI - piAproximado));
        
        // Generación de datos de prueba
        System.out.println("\\n=== DATOS DE PRUEBA ALEATORIOS ===");
        String[] nombres = {"Ana", "Carlos", "María", "José", "Laura", "Miguel"};
        String[] departamentos = {"Ventas", "TI", "RH", "Finanzas", "Marketing"};
        
        for (int i = 0; i < 5; i++) {
            String nombre = nombres[random.nextInt(nombres.length)];
            String depto = departamentos[random.nextInt(departamentos.length)];
            double salario = 1500 + random.nextDouble() * 3500; // 1500-5000
            int antiguedad = random.nextInt(20) + 1;
            
            System.out.printf("Empleado %d: %-10s | %-10s | $%8.2f | %2d años%n",
                i + 1, nombre, depto, salario, antiguedad);
        }
    }
}`,
            },
            {
                title: "SecureRandom para Aplicaciones Seguras",
                code: `import java.security.SecureRandom;
import java.util.Base64;
import java.util.HexFormat;

public class SeguridadCriptografica {
    private static final String CARACTERES_SEGUROS = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    
    public static void main(String[] args) {
        SecureRandom secureRandom = new SecureRandom();
        
        // Generación de tokens de sesión
        System.out.println("=== TOKENS DE SEGURIDAD ===");
        for (int i = 0; i < 3; i++) {
            byte[] token = new byte[32]; // 256 bits
            secureRandom.nextBytes(token);
            String tokenBase64 = Base64.getUrlEncoder().withoutPadding().encodeToString(token);
            System.out.printf("Token %d: %s%n", i + 1, tokenBase64);
        }
        
        // Generación de contraseñas seguras
        System.out.println("\\n=== CONTRASEÑAS SEGURAS ===");
        for (int longitud : new int[]{12, 16, 20}) {
            String contraseña = generarContraseñaSegura(secureRandom, longitud);
            System.out.printf("Contraseña %d caracteres: %s%n", longitud, contraseña);
        }
        
        // Claves criptográficas
        System.out.println("\\n=== CLAVES CRIPTOGRÁFICAS ===");
        byte[] claveAES = new byte[32]; // AES-256
        byte[] claveHMAC = new byte[64]; // HMAC-SHA512
        byte[] iv = new byte[16]; // Vector de inicialización
        
        secureRandom.nextBytes(claveAES);
        secureRandom.nextBytes(claveHMAC);
        secureRandom.nextBytes(iv);
        
        HexFormat hex = HexFormat.of();
        System.out.println("Clave AES-256: " + hex.formatHex(claveAES));
        System.out.println("Clave HMAC: " + hex.formatHex(claveHMAC).substring(0, 32) + "...");
        System.out.println("IV: " + hex.formatHex(iv));
        
        // Nonce para prevención de replay attacks
        System.out.println("\\n=== NONCE ÚNICOS ===");
        for (int i = 0; i < 5; i++) {
            byte[] nonce = new byte[8]; // 64 bits
            secureRandom.nextBytes(nonce);
            System.out.printf("Nonce %d: %s%n", i + 1, hex.formatHex(nonce));
        }
        
        // Simulación de OTP (One-Time Password)
        System.out.println("\\n=== CÓDIGOS OTP ===");
        for (int i = 0; i < 5; i++) {
            String otp = generarOTP(secureRandom, 6);
            System.out.printf("OTP %d: %s%n", i + 1, otp);
        }
    }
    
    private static String generarContraseñaSegura(SecureRandom sr, int longitud) {
        StringBuilder sb = new StringBuilder(longitud);
        for (int i = 0; i < longitud; i++) {
            int index = sr.nextInt(CARACTERES_SEGUROS.length());
            sb.append(CARACTERES_SEGUROS.charAt(index));
        }
        return sb.toString();
    }
    
    private static String generarOTP(SecureRandom sr, int digitos) {
        StringBuilder otp = new StringBuilder(digitos);
        for (int i = 0; i < digitos; i++) {
            otp.append(sr.nextInt(10)); // 0-9
        }
        return otp.toString();
    }
}`,
            },
        ],
    },
    {
        id: "recursividad",
        title: "Recursividad",
        description:
            "La recursividad es una técnica donde una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños. Es elegante pero requiere cuidado para evitar desbordamientos de pila.",
        color: "primary",
        examples: [
            {
                title: "Algoritmos de Ordenamiento Recursivos",
                code: `import java.util.Arrays;

public class OrdenamientoRecursivo {
    
    // QuickSort recursivo
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = particion(arr, low, high);
            quickSort(arr, low, pi - 1);  // Ordenar elementos antes del pivote
            quickSort(arr, pi + 1, high); // Ordenar elementos después del pivote
        }
    }
    
    private static int particion(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                intercambiar(arr, i, j);
            }
        }
        intercambiar(arr, i + 1, high);
        return i + 1;
    }
    
    // MergeSort recursivo
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);      // Ordenar primera mitad
            mergeSort(arr, mid + 1, right); // Ordenar segunda mitad
            merge(arr, left, mid, right);   // Combinar mitades ordenadas
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        System.arraycopy(arr, left, L, 0, n1);
        System.arraycopy(arr, mid + 1, R, 0, n2);
        
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }
        
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
    
    // Búsqueda binaria recursiva
    public static int busquedaBinaria(int[] arr, int objetivo, int left, int right) {
        if (left > right) return -1; // Caso base: no encontrado
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == objetivo) {
            return mid; // Caso base: encontrado
        } else if (arr[mid] > objetivo) {
            return busquedaBinaria(arr, objetivo, left, mid - 1); // Buscar en izquierda
        } else {
            return busquedaBinaria(arr, objetivo, mid + 1, right); // Buscar en derecha
        }
    }
    
    // Fibonacci con memoización para optimización
    private static long[] memoFibonacci = new long[100];
    
    public static long fibonacci(int n) {
        if (n <= 1) return n; // Caso base
        
        if (memoFibonacci[n] != 0) {
            return memoFibonacci[n]; // Retornar valor ya calculado
        }
        
        memoFibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memoFibonacci[n];
    }
    
    private static void intercambiar(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    public static void main(String[] args) {
        int[] datos = {64, 34, 25, 12, 22, 11, 90, 5, 77, 30};
        int[] copia1 = Arrays.copyOf(datos, datos.length);
        int[] copia2 = Arrays.copyOf(datos, datos.length);
        
        System.out.println("Array original: " + Arrays.toString(datos));
        
        // QuickSort
        quickSort(copia1, 0, copia1.length - 1);
        System.out.println("QuickSort: " + Arrays.toString(copia1));
        
        // MergeSort
        mergeSort(copia2, 0, copia2.length - 1);
        System.out.println("MergeSort: " + Arrays.toString(copia2));
        
        // Búsqueda binaria
        int objetivo = 25;
        int indice = busquedaBinaria(copia1, objetivo, 0, copia1.length - 1);
        System.out.printf("Búsqueda binaria de %d: índice %d%n", objetivo, indice);
        
        // Fibonacci con memoización
        System.out.println("\\nFibonacci con memoización:");
        for (int i = 0; i <= 20; i++) {
            System.out.printf("F(%2d) = %d%n", i, fibonacci(i));
        }
    }
}`,
            },
            {
                title: "Problemas Clásicos de Recursividad",
                code: `import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class ProblemasRecursivos {
    
    // Torres de Hanoi
    public static void torresHanoi(int n, char origen, char destino, char auxiliar) {
        if (n == 1) {
            System.out.println("Mover disco 1 de " + origen + " a " + destino);
            return;
        }
        torresHanoi(n - 1, origen, auxiliar, destino);
        System.out.println("Mover disco " + n + " de " + origen + " a " + destino);
        torresHanoi(n - 1, auxiliar, destino, origen);
    }
    
    // Permutaciones de un string
    public static List<String> generarPermutaciones(String str) {
        List<String> resultado = new ArrayList<>();
        generarPermutaciones("", str, resultado);
        return resultado;
    }
    
    private static void generarPermutaciones(String prefijo, String sufijo, List<String> resultado) {
        if (sufijo.length() == 0) {
            resultado.add(prefijo); // Caso base: permutación completa
            return;
        }
        
        for (int i = 0; i < sufijo.length(); i++) {
            String nuevoPrefijo = prefijo + sufijo.charAt(i);
            String nuevoSufijo = sufijo.substring(0, i) + sufijo.substring(i + 1);
            generarPermutaciones(nuevoPrefijo, nuevoSufijo, resultado);
        }
    }
    
    // Recorrido recursivo de directorios
    public static void listarArchivos(File directorio, String nivel) {
        if (!directorio.exists() || !directorio.isDirectory()) {
            return;
        }
        
        File[] archivos = directorio.listFiles();
        if (archivos == null) return;
        
        for (File archivo : archivos) {
            System.out.println(nivel + archivo.getName());
            if (archivo.isDirectory()) {
                listarArchivos(archivo, nivel + "  "); // Llamada recursiva para subdirectorios
            }
        }
    }
    
    // Problema de las N-Reinas
    public static void resolverNReinas(int n) {
        int[] tablero = new int[n];
        System.out.println("\\nSoluciones para " + n + " reinas:");
        colocarReina(tablero, 0, n);
    }
    
    private static void colocarReina(int[] tablero, int fila, int n) {
        if (fila == n) {
            imprimirTablero(tablero); // Caso base: solución encontrada
            return;
        }
        
        for (int col = 0; col < n; col++) {
            if (esSeguro(tablero, fila, col)) {
                tablero[fila] = col;
                colocarReina(tablero, fila + 1, n); // Llamada recursiva para siguiente fila
            }
        }
    }
    
    private static boolean esSeguro(int[] tablero, int fila, int col) {
        for (int i = 0; i < fila; i++) {
            // Misma columna o misma diagonal
            if (tablero[i] == col || Math.abs(tablero[i] - col) == Math.abs(i - fila)) {
                return false;
            }
        }
        return true;
    }
    
    private static void imprimirTablero(int[] tablero) {
        for (int fila : tablero) {
            for (int col = 0; col < tablero.length; col++) {
                System.out.print(fila == col ? "Q " : ". ");
            }
            System.out.println();
        }
        System.out.println();
    }
    
    // Recursión indirecta ejemplo
    public static void funcionA(int n) {
        if (n <= 0) return;
        System.out.println("A: " + n);
        funcionB(n - 1); // Llamada a otra función que llama de vuelta
    }
    
    public static void funcionB(int n) {
        if (n <= 0) return;
        System.out.println("B: " + n);
        funcionA(n - 2); // Llamada recursiva indirecta
    }
    
    public static void main(String[] args) {
        System.out.println("=== TORRES DE HANOI ===");
        torresHanoi(3, 'A', 'C', 'B');
        
        System.out.println("\\n=== PERMUTACIONES ===");
        List<String> permutaciones = generarPermutaciones("ABC");
        System.out.println("Permutaciones de ABC: " + permutaciones);
        
        System.out.println("\\n=== RECORRIDO DE DIRECTORIOS ===");
        listarArchivos(new File("."), "");
        
        System.out.println("\\n=== N-REINAS ===");
        resolverNReinas(4);
        
        System.out.println("=== RECURSIÓN INDIRECTA ===");
        funcionA(5);
    }
}`,
            },
        ],
    },
];

export default SECTIONS_DATA;