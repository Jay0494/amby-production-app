function calculate() {

    const kg = parseFloat(document.getElementById("kg").value);
    const seedCost = parseFloat(document.getElementById("seedCost").value);

    const familyCost = parseFloat(document.getElementById("familyCost").value) || 0;
    const decanterCost = parseFloat(document.getElementById("decanterCost").value) || 0;
    const pouchCost = parseFloat(document.getElementById("pouchCost").value) || 0;

    const familyQty = parseFloat(document.getElementById("familyQty").value) || 0;
    const decanterQty = parseFloat(document.getElementById("decanterQty").value) || 0;
    const pouchQty = parseFloat(document.getElementById("pouchQty").value) || 0;

    const stickers = parseFloat(document.getElementById("stickers").value) || 0;
    const otherExpenses = parseFloat(document.getElementById("otherExpenses").value) || 0;

    if (!kg || !seedCost) {
        alert("Enter date seed KG and cost");
        return;
    }

    // KG usage per product
    const KG_FAMILY = 2.45;
    const KG_DECANTER = 0.61;
    const KG_POUCH = 0.07;
    const KG_BUSINESS = 2.45;

    // Cost per KG
    const costPerKg = seedCost / kg;

    // Production cost calculation
    const familyProdCost = (KG_FAMILY * costPerKg) + familyCost + stickers + otherExpenses;
    const decanterProdCost = (KG_DECANTER * costPerKg) + decanterCost + stickers + otherExpenses;
    const pouchProdCost = (KG_POUCH * costPerKg) + pouchCost + stickers + otherExpenses;
    const businessProdCost = (KG_BUSINESS * costPerKg) + stickers + otherExpenses;

    // Output
    document.getElementById("outFamily").innerText = "₦" + familyProdCost.toFixed(2);
    document.getElementById("outDecanter").innerText = "₦" + decanterProdCost.toFixed(2);
    document.getElementById("outPouch").innerText = "₦" + pouchProdCost.toFixed(2);
    document.getElementById("outBusiness").innerText = "₦" + businessProdCost.toFixed(2);
}
