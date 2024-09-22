<template>
    <div class="p-20 flex flex-row gap-20">
        <div id="schedule-wrapper" class="w-3/4 flex self-center">
            <div id="generatePDF" class=" w-full grid grid-cols-5 my-auto">
                <Card />
                <Card />

                <Card />

                <Card />

                <Card />

                <Card />
                <Card />
                <Card />

                <Card />

                <Card />

                <Card />

                <Card />
                <Card />

                <Card />

                <Card />

            </div>
        </div>
        <div>
            <button @click="downloadPDF">Download</button>
        </div>
        <div class="w-1/4">
            <SetTask />
        </div>

    </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import SetTask from '../views/SetTask.vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const downloadPDF = async () => {
    // Set orientation to 'landscape'
    const doc = new jsPDF('landscape');
    const htmlElement = document.getElementById('schedule-wrapper');

    // Use html2canvas to convert the element to a canvas
    const canvas = await html2canvas(htmlElement);
    const imgData = canvas.toDataURL('image/png');

    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    // Define padding
    const paddingLeftRight = 20; // 80px left and right
    const paddingTopBottom = 24; // 70px top and bottom

    // Adjust image width and height to fit within padding
    const contentWidth = pdfWidth - 2 * paddingLeftRight;
    const contentHeight = (imgProps.height * contentWidth) / imgProps.width;

    // Ensure the content fits within the page height considering padding
    const finalContentHeight = Math.min(contentHeight, pdfHeight - 2 * paddingTopBottom);

    // Add the image with padding
    doc.addImage(imgData, 'PNG', paddingLeftRight, paddingTopBottom, contentWidth, finalContentHeight);
    doc.save("output.pdf");
};
</script>
