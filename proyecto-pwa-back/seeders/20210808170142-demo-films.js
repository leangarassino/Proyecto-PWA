"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Films",
      [
        {
          name: "Rescatando al soldado Ryan",
          description: "Película de guerra, con mucha acción",
          sinopsis: "Steven Spielberg se acerca a la Segunda Guerra Mundial a través de una historia menor, casi anecdótica. Un capitán recibe la orden de salvar la vida a un joven soldado a fin de que su madre no se quede sin hijos: el resto ya han caído en combate.",
          image: "https://lh3.googleusercontent.com/pw/AM-JKLWHTQpS-tObAeeypXZkHQRiYz95mD5Xfr1pmfvEe0VTj5VomgfvtnBPustWQr0WYwR6VMqY52wb9ChcL0HHTSFa29kwFEfBl_PUhOponF8vANaNMxordM0d34sAgzADr0AmatkyMsduYGbLzckLepSNJg=w483-h657-no?authuser=0",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "El eterno resplandor de una mente sin recuerdos",
          description: "Película de drama",
          sinopsis: "El eterno resplandor de una mente sin recuerdos (2004), del director Michel Gondry, con guion de Charlie Kaufman, habla del miedo que tenemos los humanos de enfrentar nuestros propios sentimientos.",
          image: "https://lh3.googleusercontent.com/pw/AM-JKLVsEh73_G0cV4sMgBHJ4itKIi0MH904aeGfd-Cheove4Md5pHRFcDenAoHTeNP46K4nyDOc-kQFdQYZrAe6aL41lBAQJ3Xhotw3cPnYb4ZfXioKqq6Y3R5HfF5hZww1k0CRrfnSNpa5Prnuijiefdu6yQ=w341-h512-no?authuser=0",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alicia en el país de las maravillas",
          description: "Película para adolescentes",
          sinopsis: "Alicia (Mia Wasikowska) tiene 19 años y está a punto de recibir una propuesta de matrimonio que no le hace demasiada ilusión, por no decir ninguna. Un día, asiste a una espectacular fiesta en una mansión donde su pretendiente le pedirá la mano púbicamente.",
          image: "https://lh3.googleusercontent.com/pw/AM-JKLUVYnPcgyXNrtNY8PUNPe3MNiRYOAnW5nkFA4sW54JZDmwjoOMTEfC2IpxapW7kVikKy3wqf_PS_HtJBgUCUCdDGtHpiecVJ8PAyd98rGtkrewdfyeFUwhWoQW-cXXxUXbKv0eePyWcQboUHtL7i4U_rw=w1101-h657-no?authuser=0",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Films", null, {});
  },
};
