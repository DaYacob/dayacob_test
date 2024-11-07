const monster_image = "./Photos/Monster.png"
const days_before_rodeo_image = "./Photos/Days Before Rodeo.png"
const rainbow_bridge_3_image = "./Photos/Rainbow Bridge 3.png"
const save_me_image = "./Photos/Save Me.png"
const pick_up_the_phone_image = "./Photos/Pick Up The Phone.png"
const ds2_image = "./Photos/DS2.png"
const sunset_image = "./Photos/Sunset.png"
const blue_notes_2_image = "./Photos/Blue Notes 2.png"
const dedication_image = "./Photos/Dedication.png"
const working_on_dying_image = "./Photos/Working On Dying.png"
const ss3_image = "./Photos/Slime Season 3.png"
const almighty_so_image = "./Photos/Almighty So.png"
const without_warning_image = "./Photos/Without Warning.png"
const jeffery_image = "./Photos/Jeffery.png"
const evol_image = "./Photos/Evol.png"

const play_button = "./Photos/Play.png"
const pause_button = "./Photos/Pause.png"
const volume_button = "./Photos/Volume.png"
const mute_button = "./Photos/Mute.png"

const ctrlIcon = document.getElementById("ctrlIcon")
const name = document.querySelectorAll(".name")
const feature = document.querySelectorAll(".feature")
const shuffler = document.getElementById("shuffler")
const repeater = document.getElementById("repeater")
const songsList = document.getElementById("songs-list")
const albumTitle = document.getElementById("album-title")
const current = document.querySelectorAll(".song-img")
const volumeSlider = document.getElementById("volume")
const volumeIcon = document.getElementById("volume-icon")
const progress = document.getElementById("progress")

const image = document.querySelector(".album-img")
const title = document.getElementById("album-name")
const desc = document.getElementById("album-desc")

let all = [
    [
        ["https://dl.dropbox.com/scl/fi/vy9mgi1gcyp3silhli53j/Radical.mp3?rlkey=xwyrzz4w320vqk06x3vq0nnxh&st=a40fthpp&dl=0", "Radical", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/81rv05hgmlygmdrggn2t3/Monster.mp3?rlkey=7fr8ivgj4v4lmb74xvd3xn6eu&st=efwtn1o2&dl=0", "Monster", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/bsd34athm32s8a6ctfzf0/Throw-Away.mp3?rlkey=skevn0tabwv1iz6ogn0fhf929&st=ux440syo&dl=0", "Throw Away", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/65rurcm7nuzmapnun5r41/After-That.mp3?rlkey=ba0hxvpg9w1nh17kflcxp8bcg&st=x07rpytd&dl=0", "After That", "Future, Lil Wayne", monster_image],
        ["https://dl.dropbox.com/scl/fi/mppb7g4bryhsgovxs4q0r/My-Savages.mp3?rlkey=lirunr03ie3mezilhfytdxufu&st=z6q8387t&dl=0", "My Savages", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/wsvs4i9d97xy8yubzazu7/2Pac.mp3?rlkey=v984bx9crq243amrppiuhmbb4&st=wqfjzc5l&dl=0", "2Pac", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/pvntr7qum09rsazxxkwo7/Gangland.mp3?rlkey=zmibdztzm8p06klty0p4qvfd7&st=45fua5e8&dl=0", "Gangland", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/8u8wojhgoddf1xskn6zhv/Fetti.mp3?rlkey=qnyk39s9r5zpu4j5ziucpg5ca&st=lnzbzdhg&dl=0", "Fetti", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/koeszhjbwqkgvhp57zjjr/Hardly.mp3?rlkey=iy4m9fedw7xt7xbpkz1sovmht&st=po3klypw&dl=0", "Hardly", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/8h4li3kdgmbym4j7gylmi/Wesley-Presley.mp3?rlkey=kmk8k4f8m3fxh8bxc19h6am1l&st=e3k3oye2&dl=0", "Wesley Presley", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/fk2bsw8zlf52ee9t68yz3/Showed-Up.mp3?rlkey=20b85sni1u6ddev79qzy22zab&st=f2iwv0mg&dl=0", "Showed Up", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/ukn715k1ec6zlma7ksvrh/Mad-Luv.mp3?rlkey=n58bnk09k0510ttxk3dr7mca9&st=lvrcl7fe&dl=0", "Mad Luv", "Future", monster_image],
        ["https://dl.dropbox.com/scl/fi/z4n169uv3awdsrk57nnto/Codeine-Crazy.mp3?rlkey=8go8q8emore10xvhfe1f9sjjp&st=el3g15t1&dl=0", "Codeine Crazy", "Future", monster_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/vl27yhv6fp1lz39z5pgr2/Save-Me.mp3?rlkey=njc510zbntxmtk5839fz8p689&st=kxrihboo&dl=0", "Save Me", "Chief Keef", save_me_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/19q8tq0vxrvl9z7dtndks/Pick-Up-The-Phone.mp3?rlkey=4ql3f50ymh0o0dli3nxq9cpos&st=pc6vj8n8&dl=0", "Pick Up The Phone", "Young Thug, Travis Scott, Quavo", pick_up_the_phone_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/ww9zhsphf0psafpl060az/The-Prayer.mp3?rlkey=ft6989ts0eqzatnty0lsrrrw6&st=ld61ynax&dl=0", "The Prayer", "Travis Scott", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/37we3633a5ss5yui7x6to/Mamacita.mp3?rlkey=ku83zsqokjf80i2yzjixzrqjj&st=yk1zmelx&dl=0", "Mamacita", "Travis Scott, Rich Homie Quan, Young Thug", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/remc2kbmxp61f9jmko5yn/Quintana-Pt-2.mp3?rlkey=o6sflp5h9mvisxntygi6bxv21&st=eyv1p59i&dl=0", "Quintana Pt. 2", "Travis Scott, T.I.", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/275uwp6apdupeivuwhw03/Drugs-You-Should-Try-It.mp3?rlkey=xhwciandvyh1lgwlow3tnpe4i&st=juaz3m9c&dl=0", "Drugs You Should Try It", "Travis Scott", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/zs54m9iyhgrtv09f5lgcr/Don-t-Play.mp3?rlkey=db5u4cea6v5b4dzxf0zq1xf8d&st=yowibvdp&dl=0", "Don't Play", "Travis Scott, The 1975, Big Sean", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/g0ksvybqugr499j2tgd4p/Skyfall.mp3?rlkey=zxtramro8154tif87vd053ssj&st=qgqirnxs&dl=0", "Skyfall", "Travis Scott, Young Thug", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/roh3vzudhe8sqyr67u1if/Zombies.mp3?rlkey=eluriccxyk6n4xb67090cllms&st=x0r6kucw&dl=0", "Zombies", "Travis Scott", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/uj24uh39yyqybakqvo23m/Sloppy-Toppy.mp3?rlkey=v5hhu8k65aiinu0acp7iujsv8&st=o3a17hj6&dl=0", "Sloppy Toppy", "Travis Scott, Migos, Peewee Longway", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/htifyvwruoa5rkvw6mg2x/Basement-Freestyle.mp3?rlkey=f44sbedeq5nhyh495wd9f1l3n&st=jmazacxm&dl=0", "Basement Freestyle", "Travis Scott", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/ox3yg394856tgsy2vxwfy/Backyard.mp3?rlkey=ukksuqe2cvbuwroqq28qur6d0&st=0brxv6le&dl=0", "Backyard", "Travis Scott", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/g1ifui64hr4bmytl51rrs/Grey.mp3?rlkey=ko56quxj8gfcse0fjz914256u&st=zfcq82ya&dl=0", "Grey", "Travis Scott", days_before_rodeo_image],
        ["https://dl.dropbox.com/scl/fi/sq0mhhjr5d8mxgxgb4sre/BACC.mp3?rlkey=hb14uve68ecjwbp1bbmkmb9z1&st=83vtnh55&dl=0", "BACC", "Travis Scott", days_before_rodeo_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/0v6cczi7iqhk9t7zdbd70/God-s-Light-Burns-Upon-My-Flesh.mp3?rlkey=h031odnnirvxfldjsrp84i5ng&st=hgif3675&dl=0", "God's Light Burns Upon My Flesh", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/88s62udntkzwtzqd5hxhj/Murder-Ride.mp3?rlkey=894204zn6vmvxmtyvfh24bpew&st=xzy6wjiw&dl=0", "Murder Ride", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/qbgiu6avv5nyswjppwqk9/Chainsaw-Party.mp3?rlkey=r2ch1tqcl4neb2dj5ojgy7hhp&st=7zkquytc&dl=0", "Chainsaw Party", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/0pgrls0vhgp5w58ohvf0m/I-m-A-Sinner.mp3?rlkey=j6ir5l3q8ojvaymgbsn65x2iy&st=zig4l5i1&dl=0", "I'm A Sinner", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/pgqi44cg06i24x7aczz8w/Skin-Mask-2.mp3?rlkey=4ffqj12iyonp5muojobl6udsa&st=sj8smvoy&dl=0", "Skin Mask 2", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/g0140qyta28x52gm9bup5/Necromanser.mp3?rlkey=nn699q463hfcyuussu4k021wy&st=5k7frgpk&dl=0", "Necromanser", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/kvuzf5hx35vvu29aybgwy/Forest-Fire.mp3?rlkey=kajiqx14pwas4t3syusxzc4re&st=3x7wdr4b&dl=0", "Forest Fire", "Sematary, Buckshot", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/weanhjtyg6qxq7oswhdaj/Creepin-Thru-Da-Woods.mp3?rlkey=kolz7f23gkj6i61oq8ye5bw00&st=kkeo3rw5&dl=0", "Creepin' Thru Da Woods", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/z54w4xzsd0bnyh1yyumg4/Toothtaker.mp3?rlkey=1wmk2io80rmb2n03uhrzynm3f&st=yuyzmlhc&dl=0", "Toothtaker", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/530a7xr6ez06vz8f9ueby/Come-With-Me-To-Hell.mp3?rlkey=6wrwcwe0iu5oltypz03c8cwds&st=wosifbin&dl=0", "Come With Me To Hell", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/3r50qbnhwi5bvfaz97bne/Goin-Mordum.mp3?rlkey=hwc3i8wwt38ja5yvaojou0tpm&st=y8alyemr&dl=0", "Goin' Mordum", "Sematary, Ghost Mountain", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/k5w8nujgu96j9wagnwox6/Witching-Hour.mp3?rlkey=wj88ql697d7p1nbts1zv5fh4p&st=qriljemu&dl=0", "Witching Hour", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/ozin1fxdi76g2ikatjvfj/Skincarver.mp3?rlkey=m499zsz24q4aq40ijmh4hu62f&st=qalvvvls&dl=0", "Skincarver", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/7l9skaj79oekbcfwxrff1/Meet-By-The-River.mp3?rlkey=oc5bi8mdpc2rzbjk25kj9w1id&st=y3c2mph2&dl=0", "Meet By The River", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/hrwzlo7bw1rymanonv9uv/Truey-Jeans.mp3?rlkey=1yjxo7fc5pym59itr23td4ifb&st=itkl4q8s&dl=0", "Truey Jeans", "Sematary", rainbow_bridge_3_image],
        ["https://dl.dropbox.com/scl/fi/zxdo15ri1gh2354p26s16/Crucifixion.mp3?rlkey=1iwkn6lis41cn2tt7pr7kw6sg&st=p78uhasa&dl=0", "Crucifixion", "Sematary", rainbow_bridge_3_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/2uetoz687lpvona58rrp0/Thought-It-Was-a-Drought.mp3?rlkey=wk7xbqnw2yd8sce2cl44nvmi3&st=m03s9l7b&dl=0", "Thought It Was A Drought", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/a1szblezbbw7dbkbh2yt2/I-Serve-The-Base.mp3?rlkey=02breadwpw4bzmrhfh1msyvl1&st=eh0out9h&dl=0", "I Serve The Base", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/obdkm09rzkx1dynsxzhpv/Where-Ya-At.mp3?rlkey=x72tobruj10ivcjsyyaciqxo0&st=uoxpxks1&dl=0", "Where Ya At", "Future, Drake", ds2_image],
        ["https://dl.dropbox.com/scl/fi/4qdxscq5siwboh8hn6b9g/Groupies.mp3?rlkey=zojbeocyb1gwtb1i0vhpc1lvr&st=yav8v97s&dl=0", "Groupies", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/h9nqiml6jmneblqmtnjan/Lil-One.mp3?rlkey=d2p2pw3qh72kr3qpwftfrhmfx&st=xhrcqlg6&dl=0", "Lil One", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/9tq20z2g49n2df7ygbvl8/Stick-Talk.mp3?rlkey=dx6tudtxqavhkxvqx4z4b2p5o&st=pj979hfy&dl=0", "Stick Talk", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/xzi5o0q5lcy7papdok682/Freak-Hoe.mp3?rlkey=g490jxh69zdlmzz8vjjypbffp&st=g7fvwmbf&dl=0", "Freak Hoe", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/38nstbgl8048id0rragov/Rotation.mp3?rlkey=xddftoj2418eijcww4xshqbcr&st=6mt4bm0r&dl=0", "Rotation", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/wr0wawfauhuc3juks6uj7/Slave-Master.mp3?rlkey=1qe5inggumbpudjekjczemfm6&st=ycqb9btr&dl=0", "Slave Master", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/hqh6h63lzb73h569m2b2u/Blow-A-Bag.mp3?rlkey=3e6f4ylgjh5gimqta8k16unoe&st=bzhj1qyy&dl=0", "Blow A Bag", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/zpzhyu81zuu7fssdqpuu0/Colossal.mp3?rlkey=g1pynleao39w35ab2letv7vkd&st=7r9wboti&dl=0", "Colossal", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/9ecki7t55riilf1jdg2ha/Rich-ex.mp3?rlkey=zafylmyyoq5evmmq0k5ztj5pk&st=b7y2u7ae&dl=0", "Rich $ex", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/qxoy1mv9dkxyotd62tl33/Blood-On-The-Money.mp3?rlkey=i261noip9ymgxfx6hcurtte4f&st=bif8qrcp&dl=0", "Blood On The Money", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/uf6xvaqd2d9k7snvwm0a9/Trap-Niggas.mp3?rlkey=lwbk3in8qiuiqvn4duxri94dm&st=uwik459u&dl=0", "Trap N*****", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/rsjjbmmrpwaa78f9512km/The-Percocet-And-Stripper-Joint.mp3?rlkey=hsu0fq0jxbvv8ziwx5hf7i353&st=d7hscmlz&dl=0", "The Percocet And Stripper Joint", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/5i1ux6welc2m5wf1cbns1/Real-Sisters.mp3?rlkey=b84og17c7ivutig5ovvtzi7ha&st=y74w2pkx&dl=0", "Real Sisters", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/ue5njm6rxd4369ix8qc3t/Kno-The-Meaning.mp3?rlkey=qkguiwy95ytvn8zbe29eivwwf&st=5dk1tfpt&dl=0", "Kno The Meaning", "Future", ds2_image],
        ["https://dl.dropbox.com/scl/fi/layd838xe80a7oqdvcsjd/Fuck-Up-Some-Commas.mp3?rlkey=8ofnasiv42it4ioblsr0uczrh&st=ipzb3tpv&dl=0", "Fuck Up Some Commas", "Future", ds2_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/27rzinpk0wj2n0k3i2s7q/Sunset.mp3?rlkey=wrmf0x571zx82ial13fpxmez2&st=yxryn3as&dl=0", "Sunset", "LUCKI", sunset_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/enuh8a19az24bb8pv3bx0/Ticket.mp3?rlkey=qd12kzucwnheifuy7xa1pkkdp&st=l6ecxpkd&dl=0", "Ticket", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/fp9uvnot72a5tpukby8dq/Keke-Palmer.mp3?rlkey=ur23p2c8bhr79chkz6f1272h2&st=3h8zsodj&dl=0", "Keke Palmer", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/5afn867jsg5r3wkczi52x/Mailbox.mp3?rlkey=3k9a3ffbzqdso1hqmknnfi508&st=1eqfosp5&dl=0", "Mailbox", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/1qq2i2pcfrbongmz50qeg/Cook.mp3?rlkey=i4vyh4416molwehm4wmlqqi28&st=3iuncg9z&dl=0", "Cook", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/acd1a5yh3vq8a9ls4fqro/Bad.mp3?rlkey=q4jjg1vbr7epcbx2y4l4ytnpq&st=915395u2&dl=0", "Bad", "Chief Keef, Tadoe", dedication_image],
        ["https://dl.dropbox.com/scl/fi/h55raebhjoo5ae21dsa3f/Text.mp3?rlkey=ftfqnqva2yd3u2hpbr846wlx7&st=29u1d665&dl=0", "Text", "Chief Keef, C.Mula", dedication_image],
        ["https://dl.dropbox.com/scl/fi/n19hdcdydpl9kvg00l0zm/Glory-Bridge.mp3?rlkey=5oa9c0sbw2c9qzq2nzi5tzle7&st=ue8rkdtb&dl=0", "Glory Bridge", "Chief Keef, A Boogie Wit Da Hoodie", dedication_image],
        ["https://dl.dropbox.com/scl/fi/usv3asyq3ldpxrn9yxtlt/Get-It.mp3?rlkey=87mlr8cvc8ub47cxy09a1t5hr&st=co6g6r8t&dl=0", "Get It", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/ct0yt9w6vhtqoh2ykwk9j/Negro.mp3?rlkey=bbjy7zfmkkx5bm2689ze5ofen&st=nvq2jft9&dl=0", "Negro", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/batfuc987if1cv0uzb9n6/Less-Speed.mp3?rlkey=da3mqktr12cgu97c9tzdu2666&st=d3dpipuv&dl=0", "Less Speed", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/duiocmn1pxv11riugsrif/Come-On-Now.mp3?rlkey=7jy9r173xzxf3c4u9z44r18bd&st=d225iohl&dl=0", "Come On Now", "Chief Keef, Lil Yachty", dedication_image],
        ["https://dl.dropbox.com/scl/fi/ko5k1zd221mcqjnrhodh2/Kills.mp3?rlkey=b1ntd8xnao4lvukdkzaa60f5b&st=0df6fims&dl=0", "Kills", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/w61qanjs6q5abiantkptx/Told-Y-all.mp3?rlkey=x4u7qnvy0c5n1vpp08qr8pwjl&st=twabhgdk&dl=0", "Told Y'all", "Chief Keef", dedication_image],
        ["https://dl.dropbox.com/scl/fi/s1m3gxh77cpp0nkrvxuyb/Let-Me-See.mp3?rlkey=s48n6d6ckzr73tyukj56pek5w&st=mmw6o5z3&dl=0", "Let Me See", "Chief Keef, Tadoe", dedication_image],
        ["https://dl.dropbox.com/scl/fi/6bejks0dtrur87qg6bxf9/Be-Back.mp3?rlkey=6yw8tfk0tr67a6k64mp0i0uml&st=53njr8tu&dl=0", "Be Back", "Chief Keef", dedication_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/f0fhant40rk955y8zo02c/Redlight-Moments.mp3?rlkey=rnm9tf0gpdleqxdu247qftrpp&st=plbndcm5&dl=0", "Redlight Moments", "Bladee", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/civc57qwttr5g8hrtqjh3/Lordship.mp3?rlkey=guapyq6lfniwfxnsfx087tm4d&st=cxbc0ktp&dl=0", "Lordship", "Bladee, Yung Lean", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/7hqy7kgg2v6lq4cknlev9/Knightsbridge.mp3?rlkey=a7uiffpzky5gdsyew94u59bzr&st=chto2cmj&dl=0", "Knightsbridge", "Bladee", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/xk293ud6cmn395qnwzs8l/Backstr-t-Boys.mp3?rlkey=qltr6d07m2gor4sjma85rzimb&st=yb079iur&dl=0", "Backstr€€t Boys", "Bladee, Black Kray", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/wvskmlgz1bthqm3i1kory/Under-Your-Spell.mp3?rlkey=wtekjjqvou55cg0a343pjmjup&st=abgowcgt&dl=0", "Under Your Spell", "Bladee", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/8qaoegrjsoj3k9vth7b1b/D-925.mp3?rlkey=r5149e2fjaof1sxtpzxbesias&st=gn8db5si&dl=0", "D-925", "Bladee", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/3grxwq33vn9glx4jschmc/Gatekeeper.mp3?rlkey=u5lm1jzwnvdwls1v28z28h8st&st=79l5jmg1&dl=0", "Gatekeeper", "Bladee", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/qq7kfw74f0ular34x72xf/Cherry-Bracelets.mp3?rlkey=3rybbi50r359ozkx0aybljihq&st=t4limh7t&dl=0", "Cherry Bracelets", "Bladee, Yung Lean, Ecco2k", working_on_dying_image],
        ["https://dl.dropbox.com/scl/fi/hz62uwzy2nf7oa9gdgwu6/Best-Buy.mp3?rlkey=0fb9molbzin8hhkyb4ipx1wj4&st=hfvfgqv8&dl=0", "Best Buy", "Bladee", working_on_dying_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/5n2lscpv5sqa3bdi3h95m/With-Them.mp3?rlkey=qwvopn0f0bj869a0jkbs13hmj&st=0f4f0rm5&dl=0", "With Them", "Young Thug", ss3_image],
        ["https://dl.dropbox.com/scl/fi/zlwdtkgn8wubhg2tzaynb/Memo.mp3?rlkey=pjdu52r460jpga88f1m92p1fs&st=wpt8l9f4&dl=0", "Memo", "Young Thug", ss3_image],
        ["https://dl.dropbox.com/scl/fi/8n18gcc15q6qe81f7xl5t/Drippin.mp3?rlkey=y465s7zvdyx8lrvo348qboeyx&st=61iuz2qx&dl=0", "Drippin'", "Young Thug", ss3_image],
        ["https://dl.dropbox.com/scl/fi/e7dzl1ow5777pl8i1lho2/Slime-Shit.mp3?rlkey=jn48eibq6djaa7v0pbf1jwcei&st=jlvj83jv&dl=0", "Slime Shit", "Young Thug, Yak Gotti, Lil Duke, Peewee Roscoe", ss3_image],
        ["https://dl.dropbox.com/scl/fi/ej5e1c08tdz2r6infzw4j/Digits.mp3?rlkey=4nez3uhy1t9abp7u99rhc6w4e&st=r5e8xtvl&dl=0", "Digits", "Young Thug", ss3_image],
        ["https://dl.dropbox.com/scl/fi/656uw8eshedy2ffppb92j/Worth-It.mp3?rlkey=qpg8fv4ue21z3m68flj8t3zpb&st=waq5b8mv&dl=0", "Worth It", "Young Thug", ss3_image],
        ["https://dl.dropbox.com/scl/fi/it8z85fu6mbhq8r5w8864/Tattoos.mp3?rlkey=yb79gpaxvznqkw5ysi9eh2omq&st=cuwdy66y&dl=0", "Tattoos", "Young Thug", ss3_image],
        ["https://dl.dropbox.com/scl/fi/gbih96bvkkf9i2ur64wrd/Problem.mp3?rlkey=3o1m16vgov7v1eq6v7gr1nys6&st=adiuc2wi&dl=0", "Problem", "Young Thug", ss3_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/e5njwnhbrbfglhsh19ekb/Almighty-So.mp3?rlkey=mtshk4ekz9q1509jze60kopkp&st=6wpr8kcp&dl=0", "Almighty So Intro", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/6kgt8u0r2hvru9vmqew3i/Sucka.mp3?rlkey=ycdv33rve9qh6sngmw64gv54s&st=8zt9vcjt&dl=0", "Sucka", "Chief Keef, Cdai", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/muns8bf5o4kyr2prkrevf/Ape-Shit.mp3?rlkey=b06agtts44tnul6lzi0ult1oz&st=q2fk60zl&dl=0", "Ape Shit", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/c6qd622x7h5d0cz3puqhp/Hunchoz.mp3?rlkey=sr8xc4lqdjmr4wm3yila0cdod&st=m34jby2i&dl=0", "Hunchoz", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/1re28qz66jbahmooywt93/In-Love-With-The-Gwop.mp3?rlkey=7drrxc01m3k9zbjykqlmoqgj0&st=xcrgitgv&dl=0", "In Love With The Gwop", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/31e8we5wt6vpe00k8uuv3/Young-Rambos.mp3?rlkey=fqb1mporis7h7t5w9seldggb3&st=jth9k9zg&dl=0", "Young Rambos", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/r6xfq5xidxu5651ds29tz/Blew-My-High.mp3?rlkey=sde56xogzdrcvukbmjfv7uzal&st=2kthg55h&dl=0", "Blew My High", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/i9lq4zwidhk1dmwll50b8/Me.mp3?rlkey=guhenqy1imgmp4ltxbhxcfeus&st=fac22l5o&dl=0", "Me ", "Chief Keef, Tadoe", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/0m8yyecvl8ifo1e1jj8cn/Self.mp3?rlkey=xmajx6gzwcu9uiu2tjbcb3cq5&st=u6vfrocr&dl=0", "Self", "Chief Keef, Tadoe", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/qwbkpjrey0nzxockks2wl/Nice.mp3?rlkey=kgtu0qpzoejpi5tq9pv9x69xh&st=ndtk0ibe&dl=0", "Nice", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/p0fv76opizubfmrw6z32c/Salty.mp3?rlkey=t2xouskqugrtaiuvcsubc2czj&st=27p4qfe6&dl=0", "Salty", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/j2o3gbcu0jhappr5x9um0/Woulda-Coulda.mp3?rlkey=ldp3lbbnnllsxxiif6ny3d7ef&st=39f7kld9&dl=0", "Woulda Coulda", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/zxhisxy6oegoxbqjik0gy/I-Kno.mp3?rlkey=uiwrjr0d8bf9ickgjmjqghskn&st=yl6u9fnk&dl=0", "I Kno", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/8jg8mvyx8hbgr43o91f8l/Baby-Whats-Wrong-With-You.mp3?rlkey=8u7jrevcctyf9u0uy3azpfjhq&st=0hbkgjo3&dl=0", "Baby Whats Wrong With You", "Chief Keef", almighty_so_image],
        ["https://dl.dropbox.com/scl/fi/3v7f7tn1cwgzubim3xraq/Yesterday.mp3?rlkey=yd5l7hnltrlhi83zpzuqwspu7&st=rhjgstka&dl=0", "Yesterday", "Chief Keef", almighty_so_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/s1vcwp88qoytdusnq7l67/Ghostface-Killers.mp3?rlkey=5rndjv5ez273z54v5rsq5xil4&st=mitvba19&dl=0", "Ghostface Killers", "21 Savage, Offset, Metro Boomin, Travis Scott", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/8rj2hf6p1njr829ym8l5e/Rap-Saved-Me.mp3?rlkey=pniu91o688gc9ogo1jzro6c0l&st=d4qmsuw3&dl=0", "Rap Saved Me", "21 Savage, Offset, Metro Boomin, Quavo", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/7a2aadhma8oybmqi6519b/Ric-Flair-Drip.mp3?rlkey=4xsi4tyfb347qf9ta8hxp5zhv&st=a84k04xg&dl=0", "Ric Flair Drip", "Offset, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/n65m72n9wjy8hfj6y9p4q/My-Choppa-Hates-Niggas.mp3?rlkey=uq77p4lq1o25gpo9x9v4gwypn&st=exwus8a7&dl=0", "My Choppa Hate N*****", "21 Savage, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/w2qiv2tn4r4ru29c9jjjl/Nightmare.mp3?rlkey=ltpvqbk4f0a2i3liqhc5dvtc7&st=gpwu617r&dl=0", "Nightmare", "Offset, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/uflw7h3qbfk36i6l3ueyj/Mad-Stalkers.mp3?rlkey=xckam12t81b719konk22jm0tc&st=9vln418z&dl=0", "Mad Stalkers", "21 Savage, Offset, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/9vuz2uz8yhsv99ibhcr9v/Disrespectful.mp3?rlkey=s7okwdqouzydnt690okbcdg78&st=h3kgfg6h&dl=0", "Disrespectful", "21 Savage, Offset, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/92qlgskc1doqoykuw0vfw/Run-Up-The-Racks.mp3?rlkey=852actxafwkgs7osfl9gst7mx&st=s5mc4kov&dl=0", "Run Up The Racks", "21 Savage, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/mpqs77kzjkcpxy64ap9gi/Still-Serving.mp3?rlkey=dxrv4e0wm0c1ukv60hgyf0pqg&st=15ai5jhq&dl=0", "Still Serving", "21 Savage, Offset, Metro Boomin", without_warning_image],
        ["https://dl.dropbox.com/scl/fi/ltekqc25iya06gpdcmmi2/Darth-Vader.mp3?rlkey=2e06xkay7wmi5r1eemqts22vo&st=kitvvuvo&dl=0", "Darth Vader", "21 Savage, Offset, Metro Boomin", without_warning_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/nsv9ottqpserjlaj8qqst/Wyclef-Jean.mp3?rlkey=1zenpygfpnx7mwlb13b07f82n&st=29hv52k2&dl=0", "Wyclef Jean", "Young Thug", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/ktdmlx32039l83uquyvan/Floyd-Mayweather.mp3?rlkey=yao7ha1p1zn7ovyhev2i5p9hl&st=h9kzqrvt&dl=0", "Floyd Mayweather", "Young Thug, Travis Scott, Gucci Mane, Gunna", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/v9xm41yzaqc43502zxkxd/Swizz-Beatz.mp3?rlkey=0g07i5k1hal0mkxeucoiaf4gh&st=wxmzdami&dl=0", "Swizz Beatz", "Young Thug", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/g3hi5c393ooirafdt3vx9/Future-Swag.mp3?rlkey=m9hrc3y8uqsjs155ev2hchomj&st=jd7agfp0&dl=0", "Future Swag", "Young Thug", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/ey8zoii5m9l91yuv33hrs/RiRi.mp3?rlkey=njzywd3yfk7zgg85exmmzrzwo&st=eyslijxb&dl=0", "RiRi", "Young Thug", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/mlxumvuokvjuz0np19z0p/Guwop.mp3?rlkey=8eyz1dbr5ag8x2ggbfirq9d72&st=vo9koeku&dl=0", "Guwop", "Young Thug, Quavo, Offset, Young Scooter", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/n346zlwqehfud2esa8qif/Harambe.mp3?rlkey=wswtjcrdhmfmk7wos05u8tmti&st=vtnmfwny&dl=0", "Harambe", "Young Thug", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/opc2wfjq1s2ououdjt0xv/Webbie.mp3?rlkey=tkpuumq6yrgp6vwelb2c8tk0o&st=2m6rakfv&dl=0", "Webbie", "Young Thug, Lil Duke", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/ux2ugc8vv0iaehtqfqkv0/Kanye-West.mp3?rlkey=a2rorum0jmymjckzp7i3bgtte&st=oua4a8tk&dl=0", "Kanye West", "Young Thug, Wyclef Jean", jeffery_image],
        ["https://dl.dropbox.com/scl/fi/19q8tq0vxrvl9z7dtndks/Pick-Up-The-Phone.mp3?rlkey=4ql3f50ymh0o0dli3nxq9cpos&st=pc6vj8n8&dl=0", "Pick Up The Phone", "Young Thug, Travis Scott, Quavo", jeffery_image],
    ],
    [
        ["https://dl.dropbox.com/scl/fi/3v9aojse12a23i7e4s9v9/Ain-t-No-Time.mp3?rlkey=n4lnqdlg0xex1itj8whwvvl9u&st=iw1bfkcm&dl=0", "Ain't No Time", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/ekv4hgjqtdf0d0ez6sluw/In-Her-Mouth.mp3?rlkey=c9mo5no8x67ve4bkfn59vsj0l&st=agp4ohki&dl=0", "In Her Mouth", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/ltt160vogwfyzad5cntf6/Maybach.mp3?rlkey=i0hcz9ut3uiwg4buwfp2kq10e&st=5pvglg8m&dl=0", "Maybach", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/tyz25cqrp1y2rafqk6cna/Xanny-Family.mp3?rlkey=yhl2tco77af1ex9kjwv5wsuhb&st=uftery6t&dl=0", "Xanny Family", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/h29rb1cvh35sfrx0tkegb/Lil-Haiti-Baby.mp3?rlkey=17ys4eette76xitv426wgev28&st=re8qqwye&dl=0", "Lil Haiti Baby", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/rjdgu1o1mgbl4b03innf8/Photo-Copied.mp3?rlkey=ff74cefwhyng41uv1jeeg7ovr&st=0lqatiuz&dl=0", "Photo Copied", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/qnjvg80ck4wthtm3qa1e4/Seven-Rings.mp3?rlkey=i23c9atixhxvvn0drludey4du&st=ok4j2sgk&dl=0", "Seven Rings", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/2tx0yiejqbjbbz8tdbkar/Lie-To-Me.mp3?rlkey=a416i4uv5pzvatfux2714cgk1&st=ltf17k6q&dl=0", "Lie To Me", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/iymi0dgdz6t6347mtu1te/Program.mp3?rlkey=c3tcci4df2dzuu8wman8vq0gk&st=os8pak2k&dl=0", "Program", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/gr3cttp1n3djylbqrhacq/Low-Life.mp3?rlkey=72qqqp2jcdcd8bmkdxkvtbwl6&st=0fuljorw&dl=0", "Low Life", "Future, The Weeknd", evol_image],
        ["https://dl.dropbox.com/scl/fi/i03m2tv1bvvqa1tz71eg3/Fly-Shit-Only.mp3?rlkey=sc7e0l120vcoo19m63dzmr8u3&st=bi96mme5&dl=0", "Fly Shit Only", "Future", evol_image],
        ["https://dl.dropbox.com/scl/fi/k3bkx2kj1f567gwvmiwxk/Wicked.mp3?rlkey=s86u9rwqocpur12kpacthdnwq&st=jkbfp753&dl=0", "Wicked", "Future", evol_image],
    ],
]

let info = [
    ["Monster", "Future • Album • 2014", monster_image, "rgb(46, 28, 22)"],
    ["Save Me", "Chief Keef • Single • 2014", save_me_image, "rgb(71, 74, 62)"],
    ["Pick Up The Phone", "Young Thug, Travis Scott, Quavo • Single • 2016", pick_up_the_phone_image, "rgb(148, 24, 13)"],
    ["Days Before Rodeo", "Travis Scott • Album • 2014", days_before_rodeo_image, "rgb(46, 120, 171)"],
    ["Rainbow Bridge 3", "Sematary • Album • 2021", rainbow_bridge_3_image, "rgb(189, 21, 21)"],
    ["DS2", "Future • Album • 2015", ds2_image, "rgb(28, 72, 102)"],
    ["Sunset", "LUCKI • Single • 2017", sunset_image, "rgb(191, 98, 141)"],
    ["Dedication", "Chief Keef • Album • 2017", dedication_image, "rgb(184, 166, 163)"],
    ["Working On Dying", "Bladee • Album • 2017", working_on_dying_image, "rgb(105, 31, 18)"],
    ["Slime Season 3", "Young Thug • Album • 2016", ss3_image, "rgb(87, 30, 25)"],
    ["Almighty So", "Chief Keef • Album • 2013", almighty_so_image, "rgb(61, 132, 156)"],
    ["Without Warning", "21 Savage, Offset, Metro Boomin • Album • 2017", without_warning_image, "rgb(189, 21, 21)"],
    ["JEFFERY", "Young Thug • Album • 2016", jeffery_image, "rgb(111, 122, 171)"],
    ["EVOL", "Future • Album • 2016", evol_image, "rgb(49, 55, 66)"],
]

let state = true
let shuffled = false
let repeated = false
let order = 0

let listened = [0]
let index = all[0]
let list = index

let currentSong = NaN
let currentInfo = info[0]

for (let i = 0; i < all.length; i++){
    for (let j = 0; j < all[i].length; j++){
        const newAudio = new Audio(all[i][j][0])
        newAudio.preload = "metadata"
        all[i][j][0] = newAudio

        if (isNaN(currentSong.duration)){
            currentSong = all[0][0][0]
            currentSong.volume = volume.value / 1000
        }
    }
}

finishSong()
updateSongs()
checkColour()
addButton()
progression()

let dragging = false

function updateColor(){
    albumTitle.style.background = `linear-gradient(to bottom, ${currentInfo[3]}, ${"rgb(30, 30, 30)"})`
}

function progression(){
    progress.value = currentSong.currentTime
    progress.style.setProperty("--slider-background", `linear-gradient(to right, white ${0}%, gray ${0}%)`)

    currentSong.addEventListener("loadedmetadata", () => {
        progress.max = currentSong.duration
    })
    progress.max = currentSong.duration
    if (isNaN(progress.max)){
        progress.max = 1000
    }

    progress.onchange = function(){
        currentSong.currentTime = progress.value
    }

    currentSong.ontimeupdate = function(){
        if (!dragging){
            progress.value = currentSong.currentTime
            const timestamp = (progress.value / progress.max) * 100
            progress.style.setProperty("--slider-background", `linear-gradient(to right, white ${timestamp}%, gray ${timestamp}%)`)
        }
    }
}

document.addEventListener("mousemove", function(){
    if (dragging){
        const timestamp = (progress.value / progress.max) * 100
        progress.style.setProperty("--slider-background", `linear-gradient(to right, white ${timestamp}%, gray ${timestamp}%)`)
    }
})

progress.addEventListener("input", function(){
    const timestamp = (progress.value / progress.max) * 100
    progress.style.setProperty("--slider-background", `linear-gradient(to right, white ${timestamp}%, gray ${timestamp}%)`)
})

progress.addEventListener("mousedown", function(){
    dragging = true
})

progress.addEventListener("mouseup", function(){
    dragging = false
})

progress.addEventListener("touchstart", function(){
    dragging = true
})

progress.addEventListener("touchend", function(){
    dragging = false
})

volumeSlider.addEventListener("input", function(){
    currentSong.volume = volume.value / 1000
    volumeSlider.style.setProperty("--slider-background", `linear-gradient(to right, white ${volume.value/10}%, gray ${volume.value/10}%)`)
    if (volume.value <= 0){
        volumeIcon.querySelector("img").src = "./Photos/Mute.png"
    } else {
        volumeIcon.querySelector("img").src = "./Photos/Volume.png"
    }
})

function findNext(value){
    for (let i = 0; i < all.length; i++){
        for (let j = 0; j < all[i].length; j++){
            if (all[i][j][0] == value){
                return i
            }
        }
    }
}

function finishSong(){
    listened.push(currentSong)
    currentSong.addEventListener("ended", function() {
        if (repeated == false){
            skip()
        }
        updatePlayer(false)
    })
}

function updatePlayer(change){
    if (change == true){
        index = list
    }
    else{
        index = all[findNext(currentSong)]
    }

    currentSong.pause()
    currentSong.currentTime = 0
    currentSong = index[order][0]
    currentSong.volume = volume.value / 1000
    currentSong.play()
    state = false
    ctrlIcon.src=pause_button

    if (!listened.includes(currentSong)){
        finishSong()
    }

    name.forEach(x => {
        x.innerHTML = index[order][1]
    })
    feature.forEach(x => {
        x.innerHTML = index[order][2]
    })
    current.forEach(x => {
        x.src = index[order][3]
    })

    resetColours()
    checkColour()
    progression()
}

function updateSongs(){
    while (songsList.firstChild) {
        songsList.removeChild(songsList.firstChild)
    }

    updateColor()

    for (let i = 0; i < list.length; i++){
        const newSong = document.createElement("div")
        newSong.classList.add("setplay")
        newSong.identifier = i+1

        if (i+1 >= 1000){
            newSong.innerHTML = `${"  "} ${i+1}`
        } else if (i+1 >= 100){
            newSong.innerHTML = `${"      "} ${i+1}`
        } else if (i+1 >= 10){
            newSong.innerHTML = `${"          "} ${i+1}`
        } else {
            newSong.innerHTML = `${"              "} ${i+1}`
        }

        image.src = currentInfo[2]
        title.innerHTML = currentInfo[0]
        desc.innerHTML = currentInfo[1]
    
        const newH = document.createElement("h4")
        newH.innerHTML = `${list[i][1]}`

        const newP = document.createElement("p")
        newP.innerHTML = `${list[i][2]}`

        newSong.appendChild(newH)
        newSong.appendChild(newP)
        songsList.appendChild(newSong)
    }
}

function setAlbum(setNum){
    songsList.scrollTo(0, 0)
    list = all[setNum]
    currentInfo = info[setNum]
    updateSongs()
    addButton()
    checkColour()
}

function resetColours() {
    Array.from(document.getElementsByClassName("setplay")).forEach(function(button) {
        button.style.color = "white"
    })
}

function checkColour() {
    Array.from(document.getElementsByClassName("setplay")).forEach(function(button) {
        const pos = parseInt(button.identifier) - 1
        if (order > -1){
            if (list[pos][0] == currentSong){
                button.style.color = "limegreen"
            }
        }
    })
}

function addButton(){
    Array.from(document.getElementsByClassName("setplay")).forEach(function(button) {
        const pos = parseInt(button.identifier) - 1
        button.addEventListener("click", function() {
            if (list[pos][0] != currentSong) {
                order = pos
                updatePlayer(true)
                removeRepetition()
            }
            else if (state == true) {
                checkColour()
                currentSong.play()
                state = false
                ctrlIcon.src=pause_button
            }
            else if (state == false) {
                checkColour()
                currentSong.pause()
                ctrlIcon.src=play_button
                state = true
            }
        })
        button.addEventListener("mouseover", function() {
            button.style.background = "rgb(40, 40, 40)"
        })
        button.addEventListener("mouseleave", function() {
            button.style.background = "rgb(30, 30, 30)"
        })
    })
}

function number(){
    let num = Math.floor(Math.random() * list.length)

    if (list.length > 1){
        while (num == order){
            num = Math.floor(Math.random() * list.length)
        }
        return num
    }
    else {
        return num
    }
}

function songRepeat(){
    repeater.classList.toggle('inverted')
    if (repeated == false){
        repeated = true
    }
    else {
        repeated = false
    }
}

function mute(){
    volume.value = 0
    currentSong.volume = volume.value
    volumeSlider.style.setProperty("--slider-background", `linear-gradient(to right, white ${volume.value/10}%, gray ${volume.value/10}%)`)
    volumeIcon.querySelector("img").src = mute_button
}

function shuffle(){
    shuffler.classList.toggle('inverted')
    if (shuffled == false){
        shuffled = true
    }
    else {
        shuffled = false
    }
}

function removeRepetition(){
    if (repeated == true){
        repeater.classList.toggle('inverted')
        repeated = false
    }
}

function skip(){
    if (shuffled == false){
        if (order == index.length - 1) {
            order = 0
        }
        else {
            order++
        }
    }
    else {
        order = number()
    }
}

function rewind(){
    if (order == 0){
        order = index.length - 1
    }
    else {
        order--
    }
}

function playPause(){
    if (order > -1) {
        checkColour()
        if (state === true){
            currentSong.play()
            ctrlIcon.src=pause_button
            state = false
        }
        else {
            currentSong.pause()
            ctrlIcon.src=play_button
            state = true
        }
    }
}

function nextSong(){
    if (order > index.length){
        order = 0
    }
    else {
        skip()
    }
    updatePlayer(false)
    removeRepetition()
}

function previousSong(){
    if (order > -1) {
        if (order > index.length){
            order = 0
            resetColours()
            checkColour()
        }
        else {
            rewind()
        }
        updatePlayer(false)
        removeRepetition()
    }
}

document.body.onkeyup = function(event){
    if (event.key === " ") {
        const activeElement = document.activeElement

        if (!(activeElement.tagName === 'INPUT' && activeElement.type === 'text') && activeElement.tagName !== 'TEXTAREA') {
            playPause()
        }
    }
}

const searchbox = document.getElementById("search-bar")
const searching = document.getElementById("searching")
const library = document.querySelectorAll(".library img")

searchbox.addEventListener("input", function(){
    library.forEach(imagecover => {
        const identifier = imagecover.getAttribute("identifier").toLowerCase()
        const searchvalue = searching.value.toLowerCase()
        if (identifier.includes(searchvalue)) {
            imagecover.style.display = "block"
        } else {
            imagecover.style.display = "none"
        }
    })
})

document.addEventListener("keydown", function(event){
    if (event.key === " "){
       const activeElement = document.activeElement

        if (!(activeElement.tagName === 'INPUT' && activeElement.type === 'text') && activeElement.tagName !== 'TEXTAREA') {
            event.preventDefault()
        }
    }
})