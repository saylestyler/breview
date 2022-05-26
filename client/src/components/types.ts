// {"name":"a2ps","full_name":"a2ps","tap":"homebrew/core","oldname":null,"aliases":[],"versioned_formulae":[],"desc":"Any-to-PostScript filter","license":"GPL-3.0-or-later","homepage":"https://www.gnu.org/software/a2ps/","versions":{"stable":"4.14","head":null,"bottle":true},"urls":{"stable":{"url":"https://ftp.gnu.org/gnu/a2ps/a2ps-4.14.tar.gz","tag":null,"revision":null}},"revision":0,"version_scheme":0,"bottle":{"stable":{"rebuild":4,"root_url":"https://ghcr.io/v2/homebrew/core","files":{"arm64_monterey":{"cellar":"/opt/homebrew/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:b92375f7cc49a7440b431d2248cad0d97c96fcca127dace6efdeb0b2f3faa08c","sha256":"b92375f7cc49a7440b431d2248cad0d97c96fcca127dace6efdeb0b2f3faa08c"},"arm64_big_sur":{"cellar":"/opt/homebrew/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:8ac02041dbec3966b6a695dfc4215b90b9e331ae6eb8c6698cbbfa0175154c9f","sha256":"8ac02041dbec3966b6a695dfc4215b90b9e331ae6eb8c6698cbbfa0175154c9f"},"monterey":{"cellar":"/usr/local/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:c0347849efe7486dfa2c5cfd35fae4c87e194fdcd9a10c6ce8758c99e8cf144c","sha256":"c0347849efe7486dfa2c5cfd35fae4c87e194fdcd9a10c6ce8758c99e8cf144c"},"big_sur":{"cellar":"/usr/local/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:e87da2b47386fc7e3c6f20b3ff90c4bbe37b9e0aaa884440ffa216492dbc150b","sha256":"e87da2b47386fc7e3c6f20b3ff90c4bbe37b9e0aaa884440ffa216492dbc150b"},"catalina":{"cellar":"/usr/local/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:82e64b2008971430d160a3f564e32593e98fb55c43d7748c7deb9d6f546e1102","sha256":"82e64b2008971430d160a3f564e32593e98fb55c43d7748c7deb9d6f546e1102"},"mojave":{"cellar":"/usr/local/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:8ca49b4797277f79e87e48ab4c6794601b64d1dde35b9eac556d4153b8237a51","sha256":"8ca49b4797277f79e87e48ab4c6794601b64d1dde35b9eac556d4153b8237a51"},"x86_64_linux":{"cellar":"/home/linuxbrew/.linuxbrew/Cellar","url":"https://ghcr.io/v2/homebrew/core/a2ps/blobs/sha256:063b4b31a62c4d5bd905bc4faab09ac2a50c77291de52ab216fc6a7a56f8e406","sha256":"063b4b31a62c4d5bd905bc4faab09ac2a50c77291de52ab216fc6a7a56f8e406"}}}},"keg_only":false,"keg_only_reason":null,"bottle_disabled":false,"options":[],"build_dependencies":[],"dependencies":[],"recommended_dependencies":[],"optional_dependencies":[],"uses_from_macos":["gperf"],"requirements":[],"conflicts_with":[],"caveats":null,"installed":[],"linked_keg":null,"pinned":false,"outdated":false,"deprecated":false,"deprecation_date":null,"deprecation_reason":null,"disabled":false,"disable_date":null,"disable_reason":null},

export interface Formula {
  name: string;
  full_name: string;
  tap: string;
  oldname?: null;
  aliases?: (null)[] | null;
  versioned_formulae?: (null)[] | null;
  desc: string;
  license: string;
  homepage: string;
  versions: Versions;
  urls: Urls;
  revision: number;
  version_scheme: number;
  bottle: Bottle;
  keg_only: boolean;
  keg_only_reason?: null;
  bottle_disabled: boolean;
  options?: (null)[] | null;
  build_dependencies?: (null)[] | null;
  dependencies?: (null)[] | null;
  recommended_dependencies?: (null)[] | null;
  optional_dependencies?: (null)[] | null;
  uses_from_macos?: (string)[] | null;
  requirements?: (null)[] | null;
  conflicts_with?: (null)[] | null;
  caveats?: null;
  installed?: (null)[] | null;
  linked_keg?: null;
  pinned: boolean;
  outdated: boolean;
  deprecated: boolean;
  deprecation_date?: null;
  deprecation_reason?: null;
  disabled: boolean;
  disable_date?: null;
  disable_reason?: null;
}
export interface Versions {
  stable: string;
  head?: null;
  bottle: boolean;
}
export interface Urls {
  stable: Stable;
}
export interface Stable {
  url: string;
  tag?: null;
  revision?: null;
}
export interface Bottle {
  stable: Stable1;
}
export interface Stable1 {
  rebuild: number;
  root_url: string;
  files: Files;
}
export interface Files {
  arm64_monterey: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
  arm64_big_sur: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
  monterey: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
  big_sur: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
  catalina: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
  mojave: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
  x86_64_linux: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux;
}
export interface Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664Linux {
  cellar: string;
  url: string;
  sha256: string;
}

// Stores the currently-being-typechecked object for error messages.
// the below is an auto generated typescript proxy
let obj: any = null;
export class WeatherProxy {
  public readonly name: string;
  public readonly full_name: string;
  public readonly tap: string;
  public readonly oldname: null;
  public readonly aliases: null[] | null;
  public readonly versioned_formulae: null[] | null;
  public readonly desc: string;
  public readonly license: string;
  public readonly homepage: string;
  public readonly versions: VersionsProxy;
  public readonly urls: UrlsProxy;
  public readonly revision: number;
  public readonly version_scheme: number;
  public readonly bottle: BottleProxy;
  public readonly keg_only: boolean;
  public readonly keg_only_reason: null;
  public readonly bottle_disabled: boolean;
  public readonly options: null[] | null;
  public readonly build_dependencies: null[] | null;
  public readonly dependencies: null[] | null;
  public readonly recommended_dependencies: null[] | null;
  public readonly optional_dependencies: null[] | null;
  public readonly uses_from_macos: string[] | null;
  public readonly requirements: null[] | null;
  public readonly conflicts_with: null[] | null;
  public readonly caveats: null;
  public readonly installed: null[] | null;
  public readonly linked_keg: null;
  public readonly pinned: boolean;
  public readonly outdated: boolean;
  public readonly deprecated: boolean;
  public readonly deprecation_date: null;
  public readonly deprecation_reason: null;
  public readonly disabled: boolean;
  public readonly disable_date: null;
  public readonly disable_reason: null;
  public static Parse(d: string): WeatherProxy {
    return WeatherProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): WeatherProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.name, false, field + ".name");
    checkString(d.full_name, false, field + ".full_name");
    checkString(d.tap, false, field + ".tap");
    checkNull(d.oldname, field + ".oldname");
    if (d.oldname === undefined) {
      d.oldname = null;
    }
    checkArray(d.aliases, field + ".aliases");
    if (d.aliases) {
      for (let i = 0; i < d.aliases.length; i++) {
        checkNull(d.aliases[i], field + ".aliases" + "[" + i + "]");
        if (d.aliases[i] === undefined) {
          d.aliases[i] = null;
        }
      }
    }
    if (d.aliases === undefined) {
      d.aliases = null;
    }
    checkArray(d.versioned_formulae, field + ".versioned_formulae");
    if (d.versioned_formulae) {
      for (let i = 0; i < d.versioned_formulae.length; i++) {
        checkNull(d.versioned_formulae[i], field + ".versioned_formulae" + "[" + i + "]");
        if (d.versioned_formulae[i] === undefined) {
          d.versioned_formulae[i] = null;
        }
      }
    }
    if (d.versioned_formulae === undefined) {
      d.versioned_formulae = null;
    }
    checkString(d.desc, false, field + ".desc");
    checkString(d.license, false, field + ".license");
    checkString(d.homepage, false, field + ".homepage");
    d.versions = VersionsProxy.Create(d.versions, field + ".versions");
    d.urls = UrlsProxy.Create(d.urls, field + ".urls");
    checkNumber(d.revision, false, field + ".revision");
    checkNumber(d.version_scheme, false, field + ".version_scheme");
    d.bottle = BottleProxy.Create(d.bottle, field + ".bottle");
    checkBoolean(d.keg_only, false, field + ".keg_only");
    checkNull(d.keg_only_reason, field + ".keg_only_reason");
    if (d.keg_only_reason === undefined) {
      d.keg_only_reason = null;
    }
    checkBoolean(d.bottle_disabled, false, field + ".bottle_disabled");
    checkArray(d.options, field + ".options");
    if (d.options) {
      for (let i = 0; i < d.options.length; i++) {
        checkNull(d.options[i], field + ".options" + "[" + i + "]");
        if (d.options[i] === undefined) {
          d.options[i] = null;
        }
      }
    }
    if (d.options === undefined) {
      d.options = null;
    }
    checkArray(d.build_dependencies, field + ".build_dependencies");
    if (d.build_dependencies) {
      for (let i = 0; i < d.build_dependencies.length; i++) {
        checkNull(d.build_dependencies[i], field + ".build_dependencies" + "[" + i + "]");
        if (d.build_dependencies[i] === undefined) {
          d.build_dependencies[i] = null;
        }
      }
    }
    if (d.build_dependencies === undefined) {
      d.build_dependencies = null;
    }
    checkArray(d.dependencies, field + ".dependencies");
    if (d.dependencies) {
      for (let i = 0; i < d.dependencies.length; i++) {
        checkNull(d.dependencies[i], field + ".dependencies" + "[" + i + "]");
        if (d.dependencies[i] === undefined) {
          d.dependencies[i] = null;
        }
      }
    }
    if (d.dependencies === undefined) {
      d.dependencies = null;
    }
    checkArray(d.recommended_dependencies, field + ".recommended_dependencies");
    if (d.recommended_dependencies) {
      for (let i = 0; i < d.recommended_dependencies.length; i++) {
        checkNull(d.recommended_dependencies[i], field + ".recommended_dependencies" + "[" + i + "]");
        if (d.recommended_dependencies[i] === undefined) {
          d.recommended_dependencies[i] = null;
        }
      }
    }
    if (d.recommended_dependencies === undefined) {
      d.recommended_dependencies = null;
    }
    checkArray(d.optional_dependencies, field + ".optional_dependencies");
    if (d.optional_dependencies) {
      for (let i = 0; i < d.optional_dependencies.length; i++) {
        checkNull(d.optional_dependencies[i], field + ".optional_dependencies" + "[" + i + "]");
        if (d.optional_dependencies[i] === undefined) {
          d.optional_dependencies[i] = null;
        }
      }
    }
    if (d.optional_dependencies === undefined) {
      d.optional_dependencies = null;
    }
    checkArray(d.uses_from_macos, field + ".uses_from_macos");
    if (d.uses_from_macos) {
      for (let i = 0; i < d.uses_from_macos.length; i++) {
        checkString(d.uses_from_macos[i], false, field + ".uses_from_macos" + "[" + i + "]");
      }
    }
    if (d.uses_from_macos === undefined) {
      d.uses_from_macos = null;
    }
    checkArray(d.requirements, field + ".requirements");
    if (d.requirements) {
      for (let i = 0; i < d.requirements.length; i++) {
        checkNull(d.requirements[i], field + ".requirements" + "[" + i + "]");
        if (d.requirements[i] === undefined) {
          d.requirements[i] = null;
        }
      }
    }
    if (d.requirements === undefined) {
      d.requirements = null;
    }
    checkArray(d.conflicts_with, field + ".conflicts_with");
    if (d.conflicts_with) {
      for (let i = 0; i < d.conflicts_with.length; i++) {
        checkNull(d.conflicts_with[i], field + ".conflicts_with" + "[" + i + "]");
        if (d.conflicts_with[i] === undefined) {
          d.conflicts_with[i] = null;
        }
      }
    }
    if (d.conflicts_with === undefined) {
      d.conflicts_with = null;
    }
    checkNull(d.caveats, field + ".caveats");
    if (d.caveats === undefined) {
      d.caveats = null;
    }
    checkArray(d.installed, field + ".installed");
    if (d.installed) {
      for (let i = 0; i < d.installed.length; i++) {
        checkNull(d.installed[i], field + ".installed" + "[" + i + "]");
        if (d.installed[i] === undefined) {
          d.installed[i] = null;
        }
      }
    }
    if (d.installed === undefined) {
      d.installed = null;
    }
    checkNull(d.linked_keg, field + ".linked_keg");
    if (d.linked_keg === undefined) {
      d.linked_keg = null;
    }
    checkBoolean(d.pinned, false, field + ".pinned");
    checkBoolean(d.outdated, false, field + ".outdated");
    checkBoolean(d.deprecated, false, field + ".deprecated");
    checkNull(d.deprecation_date, field + ".deprecation_date");
    if (d.deprecation_date === undefined) {
      d.deprecation_date = null;
    }
    checkNull(d.deprecation_reason, field + ".deprecation_reason");
    if (d.deprecation_reason === undefined) {
      d.deprecation_reason = null;
    }
    checkBoolean(d.disabled, false, field + ".disabled");
    checkNull(d.disable_date, field + ".disable_date");
    if (d.disable_date === undefined) {
      d.disable_date = null;
    }
    checkNull(d.disable_reason, field + ".disable_reason");
    if (d.disable_reason === undefined) {
      d.disable_reason = null;
    }
    return new WeatherProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
    this.full_name = d.full_name;
    this.tap = d.tap;
    this.oldname = d.oldname;
    this.aliases = d.aliases;
    this.versioned_formulae = d.versioned_formulae;
    this.desc = d.desc;
    this.license = d.license;
    this.homepage = d.homepage;
    this.versions = d.versions;
    this.urls = d.urls;
    this.revision = d.revision;
    this.version_scheme = d.version_scheme;
    this.bottle = d.bottle;
    this.keg_only = d.keg_only;
    this.keg_only_reason = d.keg_only_reason;
    this.bottle_disabled = d.bottle_disabled;
    this.options = d.options;
    this.build_dependencies = d.build_dependencies;
    this.dependencies = d.dependencies;
    this.recommended_dependencies = d.recommended_dependencies;
    this.optional_dependencies = d.optional_dependencies;
    this.uses_from_macos = d.uses_from_macos;
    this.requirements = d.requirements;
    this.conflicts_with = d.conflicts_with;
    this.caveats = d.caveats;
    this.installed = d.installed;
    this.linked_keg = d.linked_keg;
    this.pinned = d.pinned;
    this.outdated = d.outdated;
    this.deprecated = d.deprecated;
    this.deprecation_date = d.deprecation_date;
    this.deprecation_reason = d.deprecation_reason;
    this.disabled = d.disabled;
    this.disable_date = d.disable_date;
    this.disable_reason = d.disable_reason;
  }
}

export class VersionsProxy {
  public readonly stable: string;
  public readonly head: null;
  public readonly bottle: boolean;
  public static Parse(d: string): VersionsProxy {
    return VersionsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VersionsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.stable, false, field + ".stable");
    checkNull(d.head, field + ".head");
    if (d.head === undefined) {
      d.head = null;
    }
    checkBoolean(d.bottle, false, field + ".bottle");
    return new VersionsProxy(d);
  }
  private constructor(d: any) {
    this.stable = d.stable;
    this.head = d.head;
    this.bottle = d.bottle;
  }
}

export class UrlsProxy {
  public readonly stable: StableProxy;
  public static Parse(d: string): UrlsProxy {
    return UrlsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): UrlsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.stable = StableProxy.Create(d.stable, field + ".stable");
    return new UrlsProxy(d);
  }
  private constructor(d: any) {
    this.stable = d.stable;
  }
}

export class StableProxy {
  public readonly url: string;
  public readonly tag: null;
  public readonly revision: null;
  public static Parse(d: string): StableProxy {
    return StableProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StableProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.url, false, field + ".url");
    checkNull(d.tag, field + ".tag");
    if (d.tag === undefined) {
      d.tag = null;
    }
    checkNull(d.revision, field + ".revision");
    if (d.revision === undefined) {
      d.revision = null;
    }
    return new StableProxy(d);
  }
  private constructor(d: any) {
    this.url = d.url;
    this.tag = d.tag;
    this.revision = d.revision;
  }
}

export class BottleProxy {
  public readonly stable: Stable1Proxy;
  public static Parse(d: string): BottleProxy {
    return BottleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BottleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.stable = Stable1Proxy.Create(d.stable, field + ".stable");
    return new BottleProxy(d);
  }
  private constructor(d: any) {
    this.stable = d.stable;
  }
}

export class Stable1Proxy {
  public readonly rebuild: number;
  public readonly root_url: string;
  public readonly files: FilesProxy;
  public static Parse(d: string): Stable1Proxy {
    return Stable1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Stable1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.rebuild, false, field + ".rebuild");
    checkString(d.root_url, false, field + ".root_url");
    d.files = FilesProxy.Create(d.files, field + ".files");
    return new Stable1Proxy(d);
  }
  private constructor(d: any) {
    this.rebuild = d.rebuild;
    this.root_url = d.root_url;
    this.files = d.files;
  }
}

export class FilesProxy {
  public readonly arm64_monterey: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public readonly arm64_big_sur: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public readonly monterey: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public readonly big_sur: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public readonly catalina: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public readonly mojave: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public readonly x86_64_linux: Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy;
  public static Parse(d: string): FilesProxy {
    return FilesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): FilesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.arm64_monterey = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.arm64_monterey, field + ".arm64_monterey");
    d.arm64_big_sur = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.arm64_big_sur, field + ".arm64_big_sur");
    d.monterey = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.monterey, field + ".monterey");
    d.big_sur = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.big_sur, field + ".big_sur");
    d.catalina = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.catalina, field + ".catalina");
    d.mojave = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.mojave, field + ".mojave");
    d.x86_64_linux = Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(d.x86_64_linux, field + ".x86_64_linux");
    return new FilesProxy(d);
  }
  private constructor(d: any) {
    this.arm64_monterey = d.arm64_monterey;
    this.arm64_big_sur = d.arm64_big_sur;
    this.monterey = d.monterey;
    this.big_sur = d.big_sur;
    this.catalina = d.catalina;
    this.mojave = d.mojave;
    this.x86_64_linux = d.x86_64_linux;
  }
}

export class Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy {
  public readonly cellar: string;
  public readonly url: string;
  public readonly sha256: string;
  public static Parse(d: string): Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy {
    return Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.cellar, false, field + ".cellar");
    checkString(d.url, false, field + ".url");
    checkString(d.sha256, false, field + ".sha256");
    return new Arm64MontereyOrArm64BigSurOrMontereyOrBigSurOrCatalinaOrMojaveOrX8664LinuxProxy(d);
  }
  private constructor(d: any) {
    this.cellar = d.cellar;
    this.url = d.url;
    this.sha256 = d.sha256;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, "null or undefined", false);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
