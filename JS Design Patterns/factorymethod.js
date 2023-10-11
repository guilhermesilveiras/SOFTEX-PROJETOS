
class Computer {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    toString() {
      return `Tipo: ${this.type}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
    }
  }
  
  class PC extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, "PC");
    }
  }
  
  class Server extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, "Server");
    }
  }
  
  class ComputerFactory {
    createComputer(type, ram, hdd, cpu) {
      if (type === "PC") {
        return new PC(ram, hdd, cpu);
      } else if (type === "Server") {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error("Tipo de computador desconhecido: " + type);
      }
    }
  }
  
  const factory = new ComputerFactory();
  
  const pc1 = factory.createComputer("PC", 8, 256, 3.2);
  const pc2 = factory.createComputer("PC", 12, 128, 4.8);
  const server1 = factory.createComputer("Server", 16, 1000, 2.4);
  const server2 = factory.createComputer("Server", 32, 2000, 3.2);
  
  console.log(pc2.toString());
  console.log(server1.toString());
  