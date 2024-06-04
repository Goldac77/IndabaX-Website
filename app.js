

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModalBtnFooter = document.getElementById('closeModalBtnFooter');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');

    const openModal = () => {
        modal.classList.remove('hidden');
        modal.classList.remove('opacity-0');
        modal.classList.add('flex');
        setTimeout(() => {
            modalContent.classList.remove('translate-x-full');
        }, 10);
    };

    const closeModal = () => {
        modalContent.classList.add('translate-x-full');
        modal.classList.add('opacity-0');
        modalContent.addEventListener('transitionend', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, { once: true });
    };

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    closeModalBtnFooter.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });
});


//schedule.html page js code BELOW!!
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const Tabs = [tab1, tab2, tab3];
const Days = [day1, day2, day3];

const Obj = {
    tab1: day1,
    tab2: day2,
    tab3: day3
}

displayDayEvent(Days);

Tabs.forEach((tab) => {
    toggleTabs(tab);

    tab.addEventListener("click", () => {
        removeDayActiveClass(Days);
        removeTabActiveClass(Tabs);
        Obj[tab.id].classList.add("active");
        tab.classList.add("active");
        displayDayEvent(Days);
        toggleTabs(tab);
    })
})

function toggleTabs(tab) {
    if(tab.classList.contains("active")) {
        tab.style.backgroundColor = "#FFF";
        tab.style.color = "#000";
    }
}

function removeTabActiveClass(Tabs) {
    Tabs.forEach((tab) => {
        tab.classList.remove("active");
        tab.style.backgroundColor = "#DE0220";
        tab.style.color = "#FFF";
    })
}

function removeDayActiveClass(Days) {
    Days.forEach((day) => {
        day.classList.remove("active");
    })
}

function displayDayEvent(Days) {
    Days.forEach((day) => {
        if(day.classList.contains("active")) {
            day.style.display = "block";
        } else {
            day.style.display = "none";
        }
    })
}