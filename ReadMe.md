# Tools used
- Vs Code
- Firebase (for deployment)
- Chrome
- Lighthouse by Chrome

# How to run?
This might sound dumb but I didn't have access to original code, lighthouse did not let me audit because I had to do "save page as"(cmd + s) on chrome. So I thought to upload entire code to firebase hosting which could help me overcome this issue. Please access the "optimized" page @ https://pact-mvp.firebaseapp.com/ 

You can also download this repo and see for yourself the actual changes I did but I doubt it'll be clear. I did write a summary of what I did below maybe that would help? 

Sorry but I guess task was a bit unclear and I had to improvise and come up with a solution myself. I did what I could to the best of my knowledge. I hope it shows my passion and dedication :)

# Analysis of performance and metrics
Before(Desktop): 
- Performance: 14
- Accessibility: 89
- Best practices: 64
- SEO: 100
- First Contentful Paint: 8.2s
- First Meaningful Paint: 9.3s
- Speed Index: 22.5s
- First CPU Idle: 18.1s
- Time to Interactive: 32.7s
- Max Potential First Input Delay: 640 ms

After(Desktop): 
- Performance: 27
- Accessibility: 89
- Best practices: 79
- SEO: 100
- First Contentful Paint: 2.9s
- First Meaningful Paint: 5.4s
- Speed Index: 7.4s
- First CPU Idle: 10.9s
- Time to Interactive: 27.2s
- Max Potential First Input Delay: 740 ms

# What changed from original code?
- Fixed images paths (because this code was extracted(cmd+s) from chrome browser the audit score was very low without this change.)
- Moved all non essentials scrips to after body tag (This was sort of a mistake because I realized later that I messed up the performance and scripts load prioritization in the performance tab. However this helped significantly lower the FCP score.)
- Somehow this line in code was commented and ignored "if your site already has jQuery 1.4.2, replace vis_opt.js with vis_opt_no_jquery.js above script" updating this change drastically improved audit score as now multiple jquery wasn't being imported by library and seperately 
- Added intersection observer for images (https://web.dev/codelab-use-lazysizes-to-lazyload-images/) (This was a very clever change. I didn't knew we could do this and "defer" load images. First time :D)
- Added no referer to blank links (First time implemented this one too. Very interesting to understand how our browsers have evolved from the barebones)
- Defered non essential scripts to after page load (This was the most stupid move I did unfortunately I was so much past changes that I couldn't undo it. It did improve score but I think I messed up the scripts load prioritization. Sadly I couldn't undo it.)
- Cleaned up empty ids (Very clever...)
- Replace html elements with same ids to class name (again... very clever...)
- Misc changes (Things I can't remember due to being sick with flu and fever. :P)

# What did I learn?
- How not to do performance optimization. Chasing after numbers and metrics never help.
- Note to self: Moving all script tags to after body tag messes up the load prioritization. DON'T blindly do it. Agh...
- How to do performance testing using chrome performance tab and see what's being loaded at what time
- "defer" in script tag
- "async" in script tag
- How I can use intersection observer to lazy load items. I can even use that with SPAs. Now I know.
- Why chasing exacty numbers never help.
- How to decrease the FCP score drastically by moving all scripts at the end and only loading crucial items.

# Challenges
- Little to no knowledge of what is the load prioritization of scripts
- Little to no understanding of the actual goal of what is required. I just optimized every metric as much as I could with no understanding of which one is essential to this page only.
- No access to codebase which means multiple errors on console for missing scripts.
- Not much experience with performance optimization for vanilla js/css/html.