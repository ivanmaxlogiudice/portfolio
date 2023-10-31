<template>
    <header class="sticky top-0 z-50 w-full border-b border-black/10 bg-white/10 backdrop-blur-md dark:border-white/10 dark:bg-black/10">
        <div class="mx-auto flex items-center py-4 container">
            <div class="md:flex-1">
                <NuxtLink class="inline-flex items-center outline-none" to="/">
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">Iván <span class="hidden md:inline-block">M.&nbsp;</span> </span>
                    <span class="text-2xl font-bold text-primary">Lo Giudice</span>
                </NuxtLink>
            </div>

            <div class="flex items-center justify-end gap-4 md:order-2 md:flex-1">
                <ThemeSwitcher />
            </div>

            <nav class="items-center gap-4 md:order-1 md:flex lg:gap-12">
                <NuxtLink class="rounded-md px-2 py-1 font-medium uppercase transition duration-250 ease hover:bg-gray-100 dark:hover:bg-gray-800" to="/">
                    Home
                </NuxtLink>

                <NuxtLink class="rounded-md px-2 py-1 font-medium uppercase transition duration-250 ease hover:bg-gray-100 dark:hover:bg-gray-800" to="/projects">
                    Projects
                </NuxtLink>

                <NuxtLink class="rounded-md px-2 py-1 font-medium uppercase transition duration-250 ease hover:bg-gray-100 dark:hover:bg-gray-800" to="/contact">
                    Contact
                </NuxtLink>
            </nav>
        </div>
    </header>
</template>
