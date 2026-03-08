# Navbar
$path = 'src/components/Navbar.tsx'
$content = Get-Content $path -Raw
$content = $content.Replace('bg-black/80', 'bg-slate-900/95 border-b border-[#84378d]/20')
$content = $content.Replace('text-pink-500', 'text-[#84378d]')
$content = $content.Replace('text-gray-200', 'text-slate-200 hover:text-[#84378d]')
$content = $content.Replace('hover:text-pink-400', '')
$content = $content.Replace('bg-black p-6', 'bg-slate-900 p-6')
$content = $content.Replace('text-gray-400', 'text-slate-400 hover:text-[#84378d]')
$content = $content.Replace('hover:bg-gray-800', 'hover:text-[#84378d] hover:bg-slate-800')
$content = $content.Replace('divide-gray-500/10', 'divide-[#84378d]/20')
Set-Content -Path $path -Value $content -Encoding UTF8

# Hero
$path = 'src/components/Hero.tsx'
$content = Get-Content $path -Raw
$content = $content.Replace('bg-black', 'bg-slate-900')
$content = $content.Replace('text-gray-200', 'text-slate-200')
$content = $content.Replace('bg-pink-600', 'bg-[#84378d]')
$content = $content.Replace('hover:bg-pink-500', 'hover:bg-rose-700')
$content = $content.Replace('text-gray-900', 'text-[#84378d]')
$content = $content.Replace('hover:bg-gray-100', 'hover:bg-rose-50')
Set-Content -Path $path -Value $content -Encoding UTF8

# Gallery
$path = 'src/components/Gallery.tsx'
$content = Get-Content $path -Raw
$content = $content.Replace('text-slate-800', 'text-[#84378d]')
$content = $content.Replace('bg-rose-500', 'bg-[#84378d]')
$content = $content.Replace('hover:bg-rose-100', 'hover:bg-rose-50')
$content = $content.Replace('hover:text-rose-600', 'hover:text-[#84378d]')
$content = $content.Replace('bg-slate-100', 'bg-rose-50')
$content = $content.Replace('text-slate-600', 'text-slate-700')
$content = $content.Replace('bg-slate-200', 'bg-rose-50')
$content = $content.Replace('bg-black/60', 'bg-slate-900/60')
$content = $content.Replace('hover:text-rose-500', 'hover:text-[#84378d]')
$content = $content.Replace('bg-black/90', 'bg-slate-900/95')
$content = $content.Replace('text-neutral-500', 'text-[#84378d]/80')
Set-Content -Path $path -Value $content -Encoding UTF8

# Pricing
$path = 'src/components/Pricing.tsx'
$content = Get-Content $path -Raw
$content = $content.Replace('bg-slate-50 px-4', 'bg-rose-50 px-4')
$content = $content.Replace('text-slate-800', 'text-[#84378d]')
$content = $content.Replace('text-slate-500', 'text-slate-700')
$content = $content.Replace('border-pink-500', 'border-[#84378d]')
$content = $content.Replace('bg-pink-500', 'bg-[#84378d]')
$content = $content.Replace('bg-pink-600', 'bg-[#84378d]')
$content = $content.Replace('hover:bg-pink-700', 'hover:bg-rose-700')
$content = $content.Replace('text-slate-900', 'text-[#84378d]')
$content = $content.Replace('hover:bg-slate-200', 'hover:bg-rose-100')
$content = $content.Replace('text-slate-700 mb-2', 'text-rose-700 mb-2')
Set-Content -Path $path -Value $content -Encoding UTF8

# Contact
$path = 'src/components/Contact.tsx'
$content = Get-Content $path -Raw
$content = $content.Replace('text-slate-800', 'text-[#84378d]')
$content = $content.Replace('text-slate-600', 'text-slate-700')
$content = $content.Replace('text-slate-700 mb-1', 'text-[#84378d] mb-1')
$content = $content.Replace('bg-slate-900 text-white font-bold py-4 rounded-md hover:bg-slate-800 transition flex justify-center items-center gap-2 disabled:bg-slate-400', 'bg-[#84378d] text-white font-bold py-4 rounded-md hover:bg-rose-700 transition flex justify-center items-center gap-2 disabled:bg-rose-300')
$content = $content.Replace('focus:border-pink-500', 'focus:border-[#84378d] bg-rose-50/50')
$content = $content.Replace('focus:ring-pink-500', 'focus:ring-[#84378d]')
$content = $content.Replace('border-slate-300', 'border-rose-200')
$content = $content.Replace('text-pink-600', 'text-rose-600')
$content = $content.Replace('text-slate-400', 'text-slate-500')
Set-Content -Path $path -Value $content -Encoding UTF8

# Page
$path = 'src/app/page.tsx'
$content = Get-Content $path -Raw
$content = $content.Replace('bg-neutral-50 dark:bg-neutral-900', 'bg-rose-50')
$content = $content.Replace('bg-white dark:bg-neutral-800', 'bg-white')
$content = $content.Replace('text-neutral-800 dark:text-neutral-100', 'text-[#84378d]')
$content = $content.Replace('text-neutral-600 dark:text-neutral-300', 'text-slate-800')
$content = $content.Replace('text-rose-500', 'text-rose-700')
$content = $content.Replace('bg-rose-50 dark:bg-neutral-900', 'bg-rose-50')
$content = $content.Replace('bg-rose-500', 'bg-[#84378d]')
$content = $content.Replace('hover:bg-rose-600', 'hover:bg-rose-700')
Set-Content -Path $path -Value $content -Encoding UTF8

"Couleurs mises a jour !"
