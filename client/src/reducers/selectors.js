export const getAllAdversities = adversities => {
    if (adversities) {
        return Object.keys(adversities).map(id => adversities[id]);
    }
}
