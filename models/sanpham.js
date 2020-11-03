module.exports = (sequelize, Sequelize) => {
    const SanPham = sequelize.define("SanPham", {
        MASP: {
            type: Sequelize.STRING
        },
        namesp: {
            type: Sequelize.STRING
        },
        solg: {
            type: Sequelize.STRING
        }
    });

    return SanPham;
};