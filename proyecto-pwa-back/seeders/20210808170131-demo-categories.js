"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Acción",
        description: "Aquí encontrarás todas las películas de acción",
        image: "https://lh3.googleusercontent.com/pw/AM-JKLVtWGacF_a_7vKcMJqs1jYk_svZ0D3Fzs1316PrEZmx-ySEo0YPKnoMNW7QnSh3rxBE_aFn0n-Zv3zYihXKDXIQx22R3Yjku-uA721qd_CwNTQXdowg0Joi3wQvoEQ140cZ8IUpwvgX5i-2RDq3Weq9sw=w1068-h600-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Drama",
        description: "Aquí encontrarás todas las películas de drama",
        image: "https://lh3.googleusercontent.com/pw/AM-JKLUJU0kNtITsFvbpXJd7zXpaF0qXv1amINjpAKOhvTkCzoyXszTNw_rflUl1aeXR3gYD1Ze3KiZM0fe_dMXt_zIIU_XTnidsxCx1CB0CA0RuEurBaAo0DsxSbtzNTQAWxTcFMgB2g0Ol7Br5TFD3JSeITQ=w1064-h600-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fantasía",
        description: "Aquí encontrarás todas las películas de fantasía",
        image: "https://lh3.googleusercontent.com/pw/AM-JKLX3usw0j7k_oPU6nCsJdYGzT53hDzt7Bd-MoslKyRo0duGEtmhVmYN18UdUkhwzYmX2znHwKWJZe4hyftagTpyQqJamkDmMpq46VrR1dB7sVntJ6qc0jIpSqDRP4YigYtd9ANtZNeSgkZWnuokBsew9dA=w1096-h600-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
