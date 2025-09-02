const menuItems = [
    {
        name: "Tacos",
        description: "yummy tacos",
        price: 5.99,
        image: "./resources/taco-icon.png"
    },
    {
        name: "Fajitas",
        description: "yummy fajitas",
        price: 6.99,
        image: "./resources/fajitas-icon.jpeg"
    },
    {
        name: "burritos",
        description: "yummy burritos",
        price: 6.99,
        image: "./resources/burritos-icon.png"
    },
    {
        name: "Aqua Fresca",
        description: "delicious",
        price: 3.99,
        image: "./resources/aqua-fresca-icon.png"
    },
    {
        name: "Horchata",
        description: "DELICIOUS",
        price: 3.99,
        image: "./resources/horchata-icon.png"
    }
];

// DOM elements

// menu item props
const menuItemName = document.getElementById("itemName");
const menuItemImage = document.getElementById("itemImage");
const menuItemDescription = document.getElementById("itemDescription")
const menuItemPrice = document.getElementById("itemPrice");

// menu buttons
const prevItemButton = document.getElementById("prevItemButton");
const nextItemButton = document.getElementById("nextItemButton");

let activeMenuItemIndex = 0;

// event listeners
prevItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    handlePreviousItem();
});

nextItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleNextItem();
})


// event handler helpers
const handleNextItem = () => {
    // check if we're at the end, wrap to first
    if (activeMenuItemIndex === menuItems.length - 1) {
        activeMenuItemIndex = 0;

    } else {
        activeMenuItemIndex++;
    }

    renderItemCard();
}

const handlePreviousItem = () => {
    // check if we're at beginning, wrap to end
    if (activeMenuItemIndex === 0) {
        activeMenuItemIndex = menuItems.length - 1;
    } else {
        activeMenuItemIndex--;
    }
    // update card
    renderItemCard();
}

const renderItemCard = () => {
    const activeItem = menuItems[activeMenuItemIndex];

    menuItemName.textContent = activeItem.name;
    menuItemDescription.textContent = activeItem.description;
    menuItemPrice.textContent = formatPrice(activeItem.price);
    menuItemImage.src = activeItem.image; // url of the image
    menuItemImage.alt = `Picture of ${activeItem.name}`;

}

// helper to format price to USD
const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price);
}

// ensure the first item renders by default
renderItemCard();

